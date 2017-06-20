import { Injectable } from '@angular/core';
import { Vacancy } from './classes/vacancy';
import { vacancies } from './collections/vacancies';
import { Http } from '@angular/http';
import { WebflowService } from '@app/services/webflow-api.service';

@Injectable()
export class VacanciesService {

  public constructor(private http: Http, private webflowService: WebflowService) {

  }

  // public getVacancies(): Vacancy[] {
  //   let copy = JSON.parse(JSON.stringify(vacancies));
  //   return copy;
  // }
  //
  // public getById(vacancyId: string): Vacancy {
  //   return this.getVacancies()[vacancyId];
  // }

  public getVacancies(): any {
    return this.webflowService.getVacanciesItems();
  }

  public getBenefits(): any {
    return this.webflowService.getBenefitsItems();
  }
}
