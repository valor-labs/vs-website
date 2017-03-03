import { Component, OnInit, Input, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Rx';

import { MailService } from '@services/mail.service';

@Component({
  selector: 'forms',
  templateUrl: './forms.html'
})
export class FormsComponent implements OnInit {
  @Input('pageName') public pageName:string;
  public success:boolean = false;
  public preloader:boolean = false;
  public isBlured:boolean = true;
  public fileName:string;
  public email: string = '';
  public name:string = '';
  public msg:string = '';
  public city:string = '';
  public phone:string = '';
  public userName: string = '';
  public userEmail: string = '';
  public userPhone: string = '';
  public userCity: string = '';
  public vacancyForm:any;
  public caseForm:any;
  public contactForm:any;
  public isMobile:boolean = false;
  public file:any;
  public isContactForm:boolean = false;
  public isCaseForm:boolean = false;
  public isVacancyForm:boolean = false;
  private location:Location;
  private urlEvents:Subject<any>;
  private MailServiceSubscribe:Subscription;
  private mailService:MailService;

  public constructor(@Inject(Location) location:Location, mailService:MailService) {
    this.urlEvents = new Subject();
    this.location = location;
    this.mailService = mailService;
  }

  public ngOnInit():void {
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

  public onBlur():void {
    this.isBlured = true;
  }

  public onFocus():void  {
    this.isBlured = false;
  }

  public onSubmit(event: any):void {
    event.target.reset();
    this.preloader = true;
    this.fileName = '';
  }

  public removeFile(input: any):void {
    input.value = '';
    this.fileName = '';
  }

  public fileChange(event: any):void {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.file = file;
      this.fileName = file.name;
    }
  }

  public getDataFromTemplate():void {
    let typeOfEmail = '';
    let self = this;

    function mailCallback (res:any):void {
      if (res.err) {
        self.preloader = false;
        alert('Something goes wrong');
        console.error(res.err);
        return;
      }
      let successTime = 3000;
      self.success = true;
      self.preloader = false;
      setTimeout(() => {
        self.success = false;
      }, successTime);
    }

    if (this.isCaseForm) {
      let formData: FormData = new FormData();
      formData.append('name', this.name);
      formData.append('email',  this.email);
      formData.append('message', this.msg);
      if(this.file) {
        formData.append('attachment', this.file);
      }
      typeOfEmail = 'client';
      this.success = false;
      this.MailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe(mailCallback);
    }

    if (this.isVacancyForm) {
      let formData: FormData = new FormData();
      formData.append('name', this.name);
      formData.append('city', this.city);
      formData.append('email',  this.email);
      formData.append('phone',  this.phone);
      formData.append('message', this.msg);
      if(this.file) {
        formData.append('attachment', this.file);
      }
      typeOfEmail = 'vacancy';
      this.success = false;
      this.MailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe(mailCallback);
    }

    if (this.isContactForm) {
      let formData: FormData = new FormData();
      if(this.file) {
        formData.append('attachment', this.file);
      }
      formData.append('email',  this.email);
      formData.append('name', this.name);
      formData.append('message', this.msg);

      typeOfEmail = 'contact';
      this.success = false;
      this.MailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe(mailCallback);
    }
  }
}
