import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MainService } from '../../services/main.service';
import { Member } from '../../services/classes/member';

@Component({
  selector: 'team-member',
  templateUrl: './team-member.html'
})

export class MemberComponent implements OnInit {
  public memberId: number;
  public socials: any;
  @Input() public member: Member;

  public constructor(private mainService: MainService, private route: ActivatedRoute, private _titleService: Title) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.memberId = params.memberId;
      this.member = this.mainService.getById(this.memberId);

      // setting up <title> and tab name
      this._titleService.setTitle(this.member.name);
      this.socials = this.member.socials;
    });
  }
}

@Component({
  selector: 'team',
  templateUrl: './team.html'
})

export class TeamComponent implements OnInit {
  public team:Member[];

  public ngOnInit():void {
    this.team = this.mainService.getTeam();
  }

  public constructor(public mainService:MainService) {

  }
}
