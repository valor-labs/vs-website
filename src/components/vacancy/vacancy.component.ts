import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../services/classes/vacancy';
import { VacanciesService } from '../../services/vacancies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vacancy',
  template: require('./vacancy.html')
})
export class VacancyComponent implements OnInit {
  public pageName: string;
  public vacancy: Vacancy;
  public vacancyId: number;

  public constructor(private vacanciesService: VacanciesService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.pageName = 'Vacancy page';
    this.route.params.subscribe((params: any) => {
      /* tslint:disable */
      this.vacancyId = params['vacancyId'];
      /* tslint:enable */

      this.vacancy = this.vacanciesService.getById(this.vacancyId);
    });
  }

  public getImage = (img:string):string => require('../../services/images/vacancies/' + img);
  public getStaticImage = (img:string):string => require('./images/' + img);
}
