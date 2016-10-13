import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../services/classes/project';

@Component({
  selector: 'project-preview',
  template: require('./project-preview.html')
})

export class ProjectPreviewComponent {
  @Input() public project:Project;

  public getImage = (img:string):string => require('../../services/images/projects/' + img);
}

@Component({
  selector: 'projects-list',
  template: require('./projects-list.html')
})

export class ProjectsListComponent implements OnInit {

  public projects:Project[];
  @Input() public maxItems:number;
  @Input() public hasButton:boolean;
  @Input() public similarTo:string;

  public ngOnInit():void {
    // receiving All projects OR(if parameter similarTo specified) - similar projects only
    let projects:Project[] = (this.similarTo) ?
      this.projectsService.getSimilarTo(this.similarTo) :
      this.projectsService.getAll();

    // if param maxItems is specified - manage items number
    if (this.maxItems && this.maxItems < projects.length) {
      projects = projects.slice(0, this.maxItems);
    }

    this.projects = projects;

  }

  public constructor(public projectsService:ProjectsService) {
  }

}
