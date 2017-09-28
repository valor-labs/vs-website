import { Component, OnInit, Input, Inject } from '@angular/core';
import { Location } from '@angular/common';
// import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { MailService } from '@services/mail.service';

@Component({
  selector: 'forms',
  templateUrl: './forms.html'
})
export class FormsComponent implements OnInit {
  @Input('pageName') public pageName: string;
  public success = false;
  public preloader = false;
  public isBlured = true;
  public fileName: string;
  public email = '';
  public name = '';
  public msg = '';
  public city = '';
  public phone = '';
  public userName = '';
  public userEmail = '';
  public userPhone = '';
  public userCity = '';
  public vacancyForm: any;
  public caseForm: any;
  public contactForm: any;
  public isMobile = false;
  public file: any;
  public isContactForm = false;
  public isCaseForm = false;
  public isVacancyForm = false;
  private location: Location;
  // private urlEvents: Subject<any>;
  private mailServiceSubscribe: Subscription;
  private mailService: MailService;

  public constructor(@Inject(Location) location: Location, mailService: MailService) {
    // this.urlEvents = new Subject();
    this.location = location;
    this.mailService = mailService;
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

  public onBlur(): void {
    this.isBlured = true;
  }

  public onFocus(): void {
    this.isBlured = false;
  }

  public onSubmit(event: any): void {
    event.target.reset();
    this.preloader = true;
    this.fileName = '';
  }

  public removeFile(input: any): void {
    input.value = '';
    this.fileName = '';
  }

  public fileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.file = file;
      this.fileName = file.name;
    }
  }

  public getDataFromTemplate(): void {
    let typeOfEmail = '';

    const mailCallback = (res: any): void => {
      if (res.err) {
        this.preloader = false;
        alert('Something goes wrong');

        return;
      }
      const successTime = 3000;
      this.success = true;
      this.preloader = false;
      setTimeout(() => {
        this.success = false;
      }, successTime);
    };

    if (this.isCaseForm) {
      const formData: FormData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('message', this.msg);
      if (this.file) {
        formData.append('attachment', this.file);
      }
      typeOfEmail = 'client';
      this.success = false;
      this.mailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe(mailCallback);
    }

    if (this.isVacancyForm) {
      const formData: FormData = new FormData();
      formData.append('name', this.name);
      formData.append('city', this.city);
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      formData.append('message', this.msg);
      if (this.file) {
        formData.append('attachment', this.file);
      }
      typeOfEmail = 'vacancy';
      this.success = false;
      this.mailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe(mailCallback);
    }

    if (this.isContactForm) {
      const formData: FormData = new FormData();
      if (this.file) {
        formData.append('attachment', this.file);
      }
      formData.append('email', this.email);
      formData.append('name', this.name);
      formData.append('message', this.msg);

      typeOfEmail = 'contact';
      this.success = false;
      this.mailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe(mailCallback);
    }
  }
}
