import { Component, OnInit } from '@angular/core';

import { VacanciesService } from '@services/vacancies.service';
import { Vacancy } from '@services/classes/vacancy';

@Component({
  selector: 'vacancies',
  templateUrl: './vacancies-list.html'
})

export class VacanciesListComponent implements OnInit {
  public vacancies: Vacancy[];

  constructor(public vacanciesService: VacanciesService) {
  }

  public ngOnInit(): void {
    this.vacancies = this.vacanciesService.getVacancies();
  }
}
