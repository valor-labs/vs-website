import { Component, OnInit, Input, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Rx';
import { MailService } from '../../services/mail.service.ts';

require('./forms.css');

@Component({
  selector: 'forms',
  template: require('./forms.html')
})
export class FormsComponent implements OnInit {
  @Input('pageName')
  private pageName: string;
  private location: Location;
  private urlEvents: Subject<any>;
  private isContactForm: boolean = false;
  private isCaseForm: boolean = false;
  private isMobile: boolean = false;
  private isVacancyForm: boolean = false;
  private MailServiceSubscribe: Subscription;
  private MailService: MailService;
  private email: string = '';
  private name: string = '';
  private msg: string = '';
  private city: string = '';
  private phone: string = '';

  public constructor(@Inject(Location) location: Location, MailService: MailService) {
    this.urlEvents = new Subject();
    this.location = location;
    this.MailService = MailService;
  }

  public ngOnInit(): void {
    this.isMobile = window.isMobile();
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

  public getImage = (img: string): string => require('./images/' + img);

  public getDataFromTemplate(): void {
    let typeOfEmail = '';

    if (this.isCaseForm) {
      typeOfEmail = 'client';
      this.MailServiceSubscribe = this.MailService.sendEmail({
        email: this.email,
        name: this.name,
        msg: this.msg
      }, typeOfEmail)
        .subscribe((res: any) => {
          if (res.err) {
            console.error(res.err);
            return;
          }
        });
    }

    if (this.isVacancyForm) {
      typeOfEmail = 'vacancy';
      this.MailServiceSubscribe = this.MailService.sendEmail({
        email: this.email,
        name: this.name,
        msg: this.msg,
        city: this.city,
        phone: this.phone
      },typeOfEmail)
        .subscribe((res: any) => {
          if (res.err) {
            console.error(res.err);
            return;
          }

        });
    }

    if (this.isContactForm) {
      typeOfEmail = 'contact';
      this.MailServiceSubscribe = this.MailService.sendEmail({
        email: this.email,
        name: this.name,
        msg: this.msg
      }, typeOfEmail)
        .subscribe((res: any) => {
          if (res.err) {
            console.error(res.err);
            return;
          }
        });
    }
  }
}
