import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';
require('./feedback.css');

@Component({
  selector: 'feedback',
  template: require('./feedback.html')
})

export class FeedbackComponent {
  public myInterval:number = 15000;
  public noWrapSlides:boolean = false;
  public slides:Array<Array<any>> = this.mainService.getFeedback();

  public getImage = (img:string):string => require('../../services/images/feedback/' + img);

  public constructor(public mainService:MainService) {
  }
}
