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

    if (this.isCaseForm) {
      let formData: FormData = new FormData();
      formData.append('name', this.name);
      formData.append('email',  this.email);
      formData.append('message', this.msg);
      if(this.file) {
        formData.append('attachment', this.file);
      }
      typeOfEmail = 'client';
      this.MailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe((res:any) => {
          if (res.err) {
            console.error(res.err);
            return;
          }
        });
    }

    if (this.isVacancyForm) {
      let formData: FormData = new FormData();
      formData.append('name', this.name);
      formData.append('city', this.city);
      formData.append('email',  this.email);
      formData.append('email',  this.phone);
      formData.append('message', this.msg);
      if(this.file) {
        formData.append('attachment', this.file);
      }
      typeOfEmail = 'vacancy';
      this.MailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe((res:any) => {
          if (res.err) {
            console.error(res.err);
            return;
          }
        });
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
      this.MailServiceSubscribe = this.mailService.sendEmail(formData, typeOfEmail)
        .subscribe((res:any) => {
          if (res.err) {
            console.error(res.err);
            return;
          }
          // TODO: empty form and notify user about send results
        });
    }
  }
}
