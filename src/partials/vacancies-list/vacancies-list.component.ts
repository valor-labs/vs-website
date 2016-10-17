import { Component, OnInit, Input } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';
import { Vacancy } from '../../services/classes/vacancy';

@Component({
  selector: 'vacancy-preview',
  template: require('./vacancy-preview.html')
})

export class VacancyPreviewComponent {
  @Input() public vacancy: Vacancy;
}

require('./vacancies.css');

@Component({
  selector: 'vacancies',
  template: require('./vacancies-list.html')
})

export class VacanciesListComponent implements OnInit {

  public vacancies: Vacancy[];

  public ngOnInit(): void {
    this.vacancies = this.vacanciesService.getVacancies();
  }

  public constructor(public vacanciesService: VacanciesService) {
  }

}
