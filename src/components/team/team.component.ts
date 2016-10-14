import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';
import { Member } from '../../services/classes/member';
require('./team.css');

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
