import { Component, OnInit, Input, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Rx';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'forms',
  templateUrl: './forms.html'
})
export class FormsComponent implements OnInit {
  public success:boolean = false;
  public fileName:string;

  @Input('pageName')
  private pageName:string;
  private location:Location;
  private urlEvents:Subject<any>;
  private isContactForm:boolean = false;
  private isCaseForm:boolean = false;
  private isMobile:boolean = false;
  private isVacancyForm:boolean = false;
  private MailServiceSubscribe:Subscription;
  private mailService:MailService;
  private email:string = '';
  private name:string = '';
  private msg:string = '';
  private city:string = '';
  private phone:string = '';
  private file:any;

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

  public onSubmit(event: any):void {
    event.target.reset();
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

    /* tslint:disable */
    function mailCallback (res:any):void {
      if (res.err) {
        console.error(res.err);
        return;
      } else {
        let successTime = 3000;
        self.success = true;
        setTimeout(() => self.success = false, successTime);
      }
    }
    /* tslint:enable */

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
