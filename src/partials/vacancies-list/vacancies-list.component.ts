import { Component, OnInit, Input } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';

export class Vacancy {
  public constructor(public projectId: number,
                     public name: string,
                     public description: string,
                     public responsibilities: string[],
                     public requirements: string[]) {
  };
}

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

  public vacancies: any = [];

  public ngOnInit(): void {
    let vacanciesList: any[];
    vacanciesList = this.vacanciesService.getVacancies();
    this.vacancies = vacanciesList;
  }

  public constructor(public vacanciesService: VacanciesService) {
  }

}
