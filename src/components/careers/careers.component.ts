import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'careers',
  templateUrl: './careers.html'
})
export class CareersComponent implements OnInit {
  public pageName: string;

  public ngOnInit(): void {
    this.pageName = 'Careers page';
  }
}
