import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Member } from '@services/classes/member';
import { WebflowService } from '@app/services/webflow-api.service';

@Component({
  selector: 'team',
  templateUrl: './team.html'
})

export class TeamComponent implements OnInit {
  public team: Member[];
  public employeesSubscribe: Observable<any>;

  public ngOnInit():void {
    this.employeesSubscribe = this.webflowService.getEmployeesItems();
    this.employeesSubscribe.subscribe((data: any) => {
      this.team = data.items;
    });
  }

  public constructor(public webflowService: WebflowService) {
  }
}
