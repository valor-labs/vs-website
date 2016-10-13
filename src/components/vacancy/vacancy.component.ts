import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vacancy',
  template: require('./vacancy.html')
})
export class VacancyComponent implements OnInit {
  public pageName: string;

  public ngOnInit(): void {

    this.pageName = 'Vacancy page';
  }
}
