import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../services/classes/project';

@Component({
  selector: 'approach',
  templateUrl: './approach.html'
})
export class ApproachComponent implements OnInit {
  public projects:Project[];
  public myInterval:number = 500000;
  public noWrapSlides:boolean = false;

  public ngOnInit():void {
    this.projects = this.projectsService.getAll();

    this.projects.forEach((item:any) => {
      if (item.video) {
        item.video = this.sanitizer.bypassSecurityTrustResourceUrl(item.video);
      }
    });
  }

  public constructor(private projectsService:ProjectsService, private sanitizer:DomSanitizer) {
  }
}
