import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'careers',
  // styles: [require('./careers.css')],
  template: require('./careers.html')
})
export class CareersComponent implements OnInit {
  public pageName: string;

  public ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    this.pageName = 'Careers page';

  }
}
