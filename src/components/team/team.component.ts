import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '../../services/main.service';
import { Member } from '../../services/classes/member';
require('./team.css');

@Component({
  selector: 'team-member',
  template: require('./team-member.html')
})

export class MemberComponent implements OnInit {
  public memberId: number;
  @Input() public member: Member;

  public getImage = (img:string):string => require('../../services/images/members/'+img);

  public constructor(private mainService: MainService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.memberId = params.memberId;
      this.member = this.mainService.getById(this.memberId);
    });
  }
}

@Component({
  selector: 'team',
  template: require('./team.html')
})

export class TeamComponent implements OnInit {
  public team:Member[];

  public getImage = (img:string):string => require('../../services/images/members/'+img);

  public ngOnInit():void {
    this.team = this.mainService.getTeam();
  }

  public constructor(public mainService:MainService) {

  }
}
