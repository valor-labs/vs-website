import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '@services/projects.service';
import { WebflowService } from '@app/services/webflow-api.service';
import { Project } from '@services/classes/project';

@Component({
  selector: 'project-preview',
  templateUrl: './project-preview.html'
})

export class ProjectPreviewComponent {
  @Input() public project:Project;
}

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.html'
})

export class ProjectsListComponent implements OnInit {

  public projects:Project[];
  @Input() public maxItems:number;
  @Input() public hasButton:boolean;
  @Input() public similarTo:string;
  @Input() public memberProjectsIds:string[];

  public constructor(public webflowService: WebflowService, public projectsService:ProjectsService, public route: ActivatedRoute) {
    this.projects = [];
  }

  public maxItemsCheck(projects: Project[]): Project[] {
    // if param maxItems is specified - manage items number
    if (this.maxItems && this.maxItems < projects.length) {
      projects = projects.slice(0, this.maxItems);
    }
    return projects;
  }

  public ngOnInit():void {

    // when click on project's link in similar projects block - ngOnInit will not invoked again
    this.route.params.subscribe((params: any) => {

      /* tslint:disable */
      const currentLink = params['projectLink'];
      /* tslint:enable */

      if (currentLink) {
        // receiving similar projects
        this.projectsService.getSimilarTo(currentLink).subscribe((data:any) => {
          this.projects = this.maxItemsCheck(data);
        });
      } else if (this.memberProjectsIds) {
        // receiving projects for specific member
        this.projectsService.getParticipant(this.memberProjectsIds).subscribe((data:any) => {
          this.projects = this.maxItemsCheck(data);
        });
      } else {
        // receiving All projects
        this.projectsService.getAll().subscribe((data:any) => {
          this.projects = this.maxItemsCheck(data);
        });
      }
    });

  }
}
