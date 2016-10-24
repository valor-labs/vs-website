import { Component, OnInit, Input } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';
import { Vacancy } from '../../services/classes/vacancy';

@Component({
  selector: 'vacancy-preview',
  templateUrl: './vacancy-preview.html',
  styleUrls: ['./vacancies.css']
})

export class VacancyPreviewComponent {
  @Input() public vacancy: Vacancy;
}

@Component({
  selector: 'vacancies',
  templateUrl: './vacancies-list.html'
})

export class VacanciesListComponent implements OnInit {

  public vacancies: Vacancy[];

  public ngOnInit(): void {
    this.vacancies = this.vacanciesService.getVacancies();
  }

  public constructor(public vacanciesService: VacanciesService) {
  }

}
