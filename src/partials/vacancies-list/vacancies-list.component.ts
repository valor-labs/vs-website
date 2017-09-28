import { Component, OnInit } from '@angular/core';

import { WebflowService } from '@app/services/webflow-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vacancies',
  templateUrl: './vacancies-list.html'
})

export class VacanciesListComponent implements OnInit {
  public vacancies: any;
  public vacanciesSubscribe: Observable<any>;

  public ngOnInit(): void {
    this.vacanciesSubscribe = this.webflowService.getVacanciesItems();
    this.vacanciesSubscribe.subscribe((data: any) => {
      this.vacancies = data.items;
    });
  }

  public constructor(public webflowService: WebflowService) {
  }
}
