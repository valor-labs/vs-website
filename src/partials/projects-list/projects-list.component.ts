import { Component, OnInit, Input } from '@angular/core';

import { ProjectsService } from '../../services/projects.service';

export class Project {
  public constructor(public projectId:number,
                     public title:string,
                     public description:string,
                     public previewImage:string,
                     public fullImage:string,
                     public externalLink:string,
                     public similarTo:number[]) {
  };
}

@Component({
  selector: 'project-preview',
  template: require('./project-preview.html')
})

export class ProjectPreviewComponent {
  @Input() public project:Project;

  public getImage = (img:string):string => require(img);
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
    const path:string = './images';

    // receiving All projects OR(if parameter similarTo specified) - similar projects only
    const projects:Project[] = (this.similarTo) ?
      this.projectsService.getSimilarTo(this.similarTo) :
      this.projectsService.getAll();

    let resultProjectsList:Project[] = []
      .concat(projects)
      .map((project:any) => {

        // wtf? without this we receive path like src/images/src/images/src/images....
        if (project.isModified) {
          return project;
        }
        project.isModified = true;

        // build path to images
        project.previewImage = `${path}/${project.previewImage}`;
        project.fullImage = `${path}${project.fullImage}`;
        return project;
      });

    // if param maxItems is specified - manage items number
    if (this.maxItems && this.maxItems < resultProjectsList.length) {
      resultProjectsList = resultProjectsList.slice(0, this.maxItems);
    }

    this.projects = resultProjectsList;

  }

  public constructor(public projectsService:ProjectsService) {
  }

}
