import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  // styles: [require('./contact.css')],
  template: require('./contact.html')
})
export class ContactComponent implements OnInit {
  public pageName: string;

  public ngOnInit(): void {

    this.pageName = 'Contact page';

  }

}
