import { Component, OnInit, Input, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';

require('./forms.css');

@Component({
  selector: 'forms',
  template: require('./forms.html')
})
export class FormsComponent implements OnInit {
  @Input('pageName')
  private pageName:string;
  private location:Location;
  private urlEvents:Subject<any>;
  private isContactForm:boolean = false;
  private isCaseForm:boolean = false;
  private isVacancyForm:boolean = false;

  public constructor(@Inject(Location) location:Location) {
    this.urlEvents = new Subject();
    this.location = location;
  }

  public ngOnInit():void {

    if (this.pageName === 'Contact page') {
      this.isContactForm = true;
    }

    if (this.pageName === 'Vacancy page') {
      this.isVacancyForm = true;
    }

    if (this.pageName === 'Project page') {
      this.isCaseForm = true;
    }
  }

  public getImage = (img:string):string => require('./images/' + img);
}
