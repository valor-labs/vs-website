import { Injectable } from '@angular/core';
import { Vacancy } from './classes/vacancy';
import { vacancies } from './collections/vacancies';

@Injectable()
export class VacanciesService {
  public getVacancies(): Vacancy[] {
    let copy = JSON.parse(JSON.stringify(vacancies));
    return copy;
  }

  public getById(vacancyId: number): Vacancy {
    return this.getVacancies()[vacancyId];
  }

}
