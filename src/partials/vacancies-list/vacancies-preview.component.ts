import { Component, Input } from '@angular/core';

import { Vacancy } from '@services/classes/vacancy';

@Component({
  selector: 'vacancy-preview',
  templateUrl: './vacancy-preview.html'
})

export class VacancyPreviewComponent {
  @Input() public vacancy: any;
}
