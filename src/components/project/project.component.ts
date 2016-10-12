import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../partials/projects-list/projects-list.component';

@Component({
  selector: 'project',
  // styles: [require('./project.css')],
  template: require('./project.html')
})

export class ProjectComponent implements OnInit {

  public projectLink: string;
  public pageName: string;
  public project: Project;
  public constructor(public route: ActivatedRoute, public projectsService:ProjectsService) {
  }

  public ngOnInit(): void {
    this.pageName = 'Project page';
    this.route.params.subscribe((params: any) => {
      /* tslint:disable */
      this.projectLink = params['projectLink'];
      /* tslint:enable */
      this.project = this.projectsService.getByLink(this.projectLink);
    });
  }
}
