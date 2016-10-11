import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';
require('./feedback.css');

@Component({
  selector: 'feedback',
  template: require('./feedback.html')
})

export class FeedbackComponent {
  public myInterval:number = 500000;
  public noWrapSlides:boolean = false;
  public slides:Array<Array<any>> = this.mainService.getFeedback();

  public constructor(public mainService:MainService) {
  }
}
