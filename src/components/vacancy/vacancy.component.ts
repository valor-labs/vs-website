import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { VacanciesService } from '@services/vacancies.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vacancy',
  templateUrl: './vacancy.html'
})
export class VacancyComponent implements OnInit {
  public pageName: string;
  public vacancy: any = {};
  public vacancyId: string;
  public benefits: any = [];
  public vacanciesSubscribe: Observable<any>;
  public benefitsSubscribe: Observable<any>;

  public constructor(private vacanciesService: VacanciesService, private route: ActivatedRoute, private _titleService: Title) {
  }

  public ngOnInit(): void {
    this.pageName = 'Vacancy page';
    this.route.params.subscribe((params: any) => {
      /* tslint:disable */
      this.vacancyId = params['vacancyId'];
      /* tslint:enable */

      this.vacanciesSubscribe = this.vacanciesService.getVacancies();
      this.vacanciesSubscribe.subscribe((vacancies: any) => {
        this.vacancy = vacancies.items.find((obj: any) => {
          return obj.slug === this.vacancyId;
        });
        this._titleService.setTitle('Vacancy: ' + this.vacancy.name);
        this.vacancy.headerImage = 'assets/images/vacancy/vacancy.jpg';
      });

      this.benefitsSubscribe = this.vacanciesService.getBenefits();
      this.benefitsSubscribe.subscribe((benefits: any) => {
        benefits.items.sort((a:any, b:any) => {
          return new Date(a['created-on']).getTime() - new Date(b['created-on']).getTime();
        });
        this.benefits = benefits.items;
      });
    });

  }

  public scrollTo(e: MouseEvent): void {
    e.preventDefault();
    this.animateScroll('applyForm', 20, 1000);
  }

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
