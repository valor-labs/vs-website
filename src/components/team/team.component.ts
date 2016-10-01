import { Component } from '@angular/core';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'team',
  styles: [require('./team.css')],
  template: require('./team.html')
})
export class TeamComponent {
  public team:any[] = this.mainService.getTeam();

  public constructor(public mainService:MainService) {

  }
}
