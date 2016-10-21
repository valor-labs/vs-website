import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'careers',
  // styles: [require('./careers.css')],
  template: './careers.html'
})
export class CareersComponent implements OnInit {
  public pageName: string;

  public ngOnInit(): void {
    this.pageName = 'Careers page';
  }
}
