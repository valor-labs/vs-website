import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../services/classes/project';

@Component({
  selector: 'approach',
  templateUrl: './approach.html'
})
export class ApproachComponent implements OnInit {
  public projects: Project[];
  public myInterval:number = 500000;
  public noWrapSlides:boolean = false;

  public ngOnInit(): void {
    this.projects = this.projectsService.getAll();
  }

  public getImage(img:string):string {
    //todo: what???
    // return require('../../services/images/projects/' + img);
    return '';
  }

  public constructor(private projectsService: ProjectsService) {}
}
