import { Injectable } from '@angular/core';
import { Vacancy } from './classes/vacancy';

@Injectable()
export class VacanciesService {
  public getVacancies(): Vacancy[] {
    const vacancies: any[] = require('./collections/vacancies.json');
    let copy = JSON.parse(JSON.stringify(vacancies));
    return copy;
  }

  public getById(vacancyId: number): Vacancy {
    return this.getVacancies()[vacancyId];
  }

}
