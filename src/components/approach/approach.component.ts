import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../services/classes/project';

@Component({
  selector: 'approach',
  templateUrl: 'src/components/approach/approach.html'
})
export class ApproachComponent implements OnInit {
  public projects: Project[];
  public myInterval:number = 500000;
  public noWrapSlides:boolean = false;

  public ngOnInit(): void {
    this.projects = this.projectsService.getAll();
  }

  public constructor(private projectsService: ProjectsService) {}
}
