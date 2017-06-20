import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { WebflowService } from '@app/services/webflow-api.service';
import { Member } from '@services/classes/member';

@Component({
  selector: 'team-member',
  templateUrl: './team-member.html'
})

export class MemberComponent {
  public socials: any = {};
  public member: Member;
  public projects: any;
  public employeesSubscribe: Observable<any>;
  public socialsSubscribe: Observable<any>;

  public constructor(public webflowService: WebflowService, private router:Router, private route:ActivatedRoute, private _titleService:Title) {
    this.route.params.subscribe((params:any) => {
      this.employeesSubscribe = this.webflowService.getEmployeesItems();
      this.employeesSubscribe.subscribe((data: any) => {
        let member = data.items.find((m: Member) => params.memberUrl === m.slug);
        if (!member) {
          return this.router.navigate(['/team']);
        }
        this.member = member;
        this._titleService.setTitle(member.name);
      });

      this.socialsSubscribe = this.webflowService.getSocialsItems();
      this.socialsSubscribe.subscribe((data: any) => {
        let socials = data.items.find((m: Member) => params.memberUrl === m.slug);

        this.socials = socials || {};
      });
    });
  }
}
