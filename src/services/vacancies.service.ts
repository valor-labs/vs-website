import { Injectable } from '@angular/core';

@Injectable()
export class VacanciesService {
  public getVacancies(): any {
    const vacancies: any[] = require('./collections/vacancies.json');
    return vacancies;
  }
}
