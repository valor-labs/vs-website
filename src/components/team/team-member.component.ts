import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MainService } from '@services/main.service';
import { ProjectsService } from '@services/projects.service';
import { Member } from '@services/classes/member';

@Component({
  selector: 'team-member',
  templateUrl: './team-member.html'
})

export class MemberComponent implements OnInit {
  public socials: any = {};
  public member: Member;
  public projects: any;

  constructor(private mainService: MainService,
              private router: Router,
              private route: ActivatedRoute,
              private _titleService: Title,
              private projectsService: ProjectsService) {
    this.route.params.subscribe((params: { memberUrl: string }) => {
      const member = this.mainService.getMemberByUrl(params.memberUrl);
      if (!member) {
        return this.router.navigate(['/team']);
      }
      this.member = member;
      this.socials = member.socials;
      this._titleService.setTitle(member.name);
    });
  }

  public ngOnInit(): void {
    this.projects = this.projectsService.getParticipant(this.member.memberId);
  }
}
