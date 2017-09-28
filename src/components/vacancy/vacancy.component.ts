import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Vacancy } from '@services/classes/vacancy';
import { VacanciesService } from '@services/vacancies.service';

@Component({
  selector: 'vacancy',
  templateUrl: './vacancy.html'
})
export class VacancyComponent implements OnInit {
  public pageName: string;
  public vacancy: Vacancy;
  public vacancyId: number;

  constructor(private vacanciesService: VacanciesService, private route: ActivatedRoute, private _titleService: Title) {
  }

  private static incScrollTo(step: number): void {
    document.body.scrollTop += step;
  }

  private static goToScroll(step: number, duration: number, inc: number): any {
    return () => {
      const currentDuration = duration - inc;
      VacancyComponent.incScrollTo(step);

      if (currentDuration < inc) {
        return;
      }

      window.requestAnimationFrame(this.goToScroll(step, currentDuration, inc));
    };
  }

  public ngOnInit(): void {
    this.pageName = 'Vacancy page';
    this.route.params.subscribe((params: any) => {
      /* tslint:disable */
      this.vacancyId = params['vacancyId'];
      /* tslint:enable */

      this.vacancy = this.vacanciesService.getById(this.vacancyId);

      // setting up <title> and tab name
      this._titleService.setTitle(`Vacancy: ${this.vacancy.name}`);
    });
  }

  public scrollTo(e: MouseEvent): void {
    const inc = 20;
    const duration = 1000;
    e.preventDefault();
    this.animateScroll('applyForm', inc, duration);
  }

  public animateScroll(id: string, inc: number, duration: number): any {
    const elem = document.getElementById(id);
    const startScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const endScroll = elem.offsetTop;
    const step = (endScroll - startScroll) / duration * inc;

    window.requestAnimationFrame(VacancyComponent.goToScroll(step, duration, inc));
  }
}
