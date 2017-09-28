import { Component, OnInit } from '@angular/core';

import { MainService } from '@services/main.service';
import { Member } from '@services/classes/member';

@Component({
  selector: 'team',
  templateUrl: './team.html'
})

export class TeamComponent implements OnInit {
  public team: Member[];

  constructor(public mainService: MainService) {

  }

  public ngOnInit(): void {
    this.team = this.mainService.getTeam();
  }
}
