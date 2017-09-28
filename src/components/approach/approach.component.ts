import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ProjectsService } from '@services/projects.service';
import { Project } from '@services/classes/project';

@Component({
  selector: 'approach',
  templateUrl: './approach.html'
})
export class ApproachComponent implements OnInit {
  public projects: Project[];
  public myInterval = 500000;
  public noWrapSlides = false;

  constructor(private projectsService: ProjectsService, private sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    this.projects = this.projectsService.getAll();

    this.projects.forEach((item: any) => {
      if (item.video) {
        item.video = this.sanitizer.bypassSecurityTrustResourceUrl(item.video);
      }
    });
  }
}
