import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ProjectsService } from '@services/projects.service';
import { WebflowService } from '@app/services/webflow-api.service';
import { Member } from '@services/classes/member';
import { Project } from '@services/classes/project';

@Component({
  selector: 'project',
  templateUrl: './project.html'
})

export class ProjectComponent implements OnInit {
  public projectLink: string;
  public pageName: string;
  public project: Project;
  public members: Member[];
  public constructor(public route: ActivatedRoute,
                     public projectsService:ProjectsService,
                     public webflowService:WebflowService,
                     private router: Router,
                     private sanitizer: DomSanitizer,
                     private _titleService: Title) {
  }

  public ngOnInit(): void {
    this.pageName = 'Project page';
    this.route.params.subscribe((params: any) => {
      this.projectLink = params.projectLink;
      this.projectsService.getByLink(this.projectLink).subscribe((data:any) => {
        this.project = data;
        // setting up <title> and tab name
        this._titleService.setTitle('Project: ' + this.project.name);

        if (this.project['video-link']) {
          this.project['video-link'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.project['video-link']);
        }

        // filter related(to this projects) members
        this.webflowService.getEmployeesItems().subscribe((mData:any) => {
          let projectMember;
          this.members = mData.items.filter((member: Member) => {
            if (member.projects) {
              projectMember = member.projects.find((projectId: string) => projectId === this.project._id);
            }
            return projectMember;
          });
        });

        this.webflowService.getReferencesItems().subscribe((rData: any) => {
          this.project.reference = rData.items.find((ref: any) => ref._id === this.project['reference-2']);
        });
      });
    });
  }

  public goToMember(memberUrl: string): void {
    if(memberUrl) {
      this.router.navigate(['./team/' + memberUrl]);
    }
  }
}
