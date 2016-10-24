import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../services/classes/project';

@Component({
  selector: 'project-preview',
  templateUrl: './project-preview.html'
})

export class ProjectPreviewComponent {
  @Input() public project:Project;

  // public getImage = (img:string):string => require('../../services/images/projects/' + img);
  public getImage = (img:string):string => '';
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

  public ngOnInit():void {

    // when click on project's link in similar projects block - ngOnInit will not invoked again
    this.route.params.subscribe((params: any) => {

      /* tslint:disable */
      const currentLink = params['projectLink'];
      /* tslint:enable */
      // receiving All projects OR(if parameter similarTo specified) - similar projects only
      let projects:Project[] = (currentLink) ?
        this.projectsService.getSimilarTo(currentLink) :
        this.projectsService.getAll();

      // if param maxItems is specified - manage items number
      if (this.maxItems && this.maxItems < projects.length) {
        projects = projects.slice(0, this.maxItems);
      }

      this.projects = projects;
    });

  }

  public constructor(public projectsService:ProjectsService, public route: ActivatedRoute) {
  }

}
