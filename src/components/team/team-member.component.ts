import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MainService } from '@services/main.service';
import { Member } from '@services/classes/member';

@Component({
  selector: 'team-member',
  templateUrl: './team-member.html'
})

export class MemberComponent {
  public socials:any = {};
  public member:Member;

  public constructor(private mainService:MainService, private router:Router, private route:ActivatedRoute, private _titleService:Title) {
    this.route.params.subscribe((params:{memberUrl:string}) => {
      let member = this.mainService.getMemberByUrl(params.memberUrl);
      if (!member) {
        return this.router.navigate(['/team']);
      }
      this.member = member;
      this.socials = member.socials;
      this._titleService.setTitle(member.name);
    });
  }
}
