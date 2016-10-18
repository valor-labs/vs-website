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

  public constructor(private vacanciesService: VacanciesService, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.pageName = 'Vacancy page';
    this.route.params.subscribe((params: any) => {
      /* tslint:disable */
      this.vacancyId = params['vacancyId'];
      /* tslint:enable */

      this.vacancy = this.vacanciesService.getById(this.vacancyId);
    });
  }

  public getImage = (img: string): string => require('../../services/images/vacancies/' + img);
  public getStaticImage = (img: string): string => require('./images/' + img);
  public scrollTo(e: MouseEvent): void {
    e.preventDefault();
    this.animateScroll('applyForm', 20, 1000);
  };

  public  animateScroll(id: string, inc: number, duration: number): any {
    const elem = document.getElementById(id);
    const startScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const endScroll = elem.offsetTop;
    const step = (endScroll - startScroll) / duration * inc;

    window.requestAnimationFrame(this.goToScroll(step, duration, inc));
  }

  private  goToScroll(step: number, duration: number, inc: number): any {
    return () => {
      const currentDuration = duration - inc;
      this.incScrollTo(step);

      if (currentDuration < inc) {
        return;
      }

      window.requestAnimationFrame(this.goToScroll(step, currentDuration, inc));
    };
  }

  private  incScrollTo(step: number): void {
    document.body.scrollTop += step;
  }
}
