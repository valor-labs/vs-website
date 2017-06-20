import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ProjectsService } from '@services/projects.service';
import { Project } from '@services/classes/project';

@Component({
  selector: 'approach',
  templateUrl: './approach.html'
})
export class ApproachComponent implements OnInit {
  public projects:Project[];
  public myInterval:number = 500000;
  public noWrapSlides:boolean = false;

  public ngOnInit():void {
    this.projectsService.getAll().subscribe((data:any) => {
      this.projects = data;

      this.projects.forEach((item:any) => {
        if (item['video-link']) {
          item['video-link'] = this.sanitizer.bypassSecurityTrustResourceUrl(item['video-link']);
        }
      });
    });
  }

  public constructor(private projectsService:ProjectsService, private sanitizer:DomSanitizer) {
  }
}
