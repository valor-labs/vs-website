import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';
require('./team.css');

export class Team {
  public constructor(public id:number,
                     public name:string,
                     public previewImage: string,
                     public position:string,
                     public skills:string[]) {
  };
}

@Component({
  selector: 'team',
  template: require('./team.html')
})

export class TeamComponent implements OnInit {
  public team:Team[];

  public getImage = (img:string):string => require(img);

  public ngOnInit():void {
    const path:string = './images';
    this.team = this.mainService.getTeam();

    console.log([].concat(this.team));
    let resultTeamList:Team[] = []
        .concat(this.team)
        .map((member:any) => {
          // build path to images
          member.previewImage = `${path}/${member.previewImage}`;
          return member;
        });

    this.team = resultTeamList;
  }

  public constructor(public mainService:MainService) {

  }
}
