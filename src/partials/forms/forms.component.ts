import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';

let style = require('./forms.css');

@Component({
  selector: 'forms',
  styles: [style.toString()],
  template: require('./forms.html')
})
export class FormsComponent implements OnInit {
  private location: Location;
  private urlEvents: Subject<any>;
  private isContactForm: boolean = false;
  private isCaseForm: boolean = false;
  private isVacancyForm: boolean = false;

  public constructor(@Inject(Location) location: Location) {
    this.urlEvents = new Subject();
    this.location = location;
  }

  public ngOnInit(): void {
    let urlPath = location.hash.replace('#/', '');
    if (urlPath.indexOf('contact') !== -1) {
      this.isContactForm = true;
    }

    if (urlPath.indexOf('careers') !== -1) {
      this.isVacancyForm = true;
    }

    if (urlPath.indexOf('project') !== -1) {
      this.isCaseForm = true;
    }
  }
}
