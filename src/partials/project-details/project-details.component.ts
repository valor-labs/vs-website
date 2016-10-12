import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector:'project-details',
  template: require('./project-details.html')
})

export class ProjectDetailsComponent implements OnInit {
  @Input() public projectLink: string;
  public project: any; // todo: set Project type
  public constructor(public projectsService:ProjectsService) {
  }

 public ngOnInit():void {
   this.project = this.projectsService.getByLink(this.projectLink);
 }
}
