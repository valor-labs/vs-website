import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: 'src/components/contact/contact.html'
})
export class ContactComponent implements OnInit {
  public pageName: string;
  public content: Array<any> = [];
  public email: any = {};
  public location: any = {};

  public ngOnInit(): void {
    this.email.title = 'Contact e-mail:';
    this.email.text = 'hello@valor-software.com';
    this.location.title = 'Location:';
    this.location.text = 'Ukraine, Kharkiv';
    this.pageName = 'Contact page';

    this.content.push(this.email);
    this.content.push(this.location);
  }

}
