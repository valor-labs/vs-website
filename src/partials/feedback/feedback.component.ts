import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.css']
})

export class FeedbackComponent {
  public myInterval:number = 15000;
  public noWrapSlides:boolean = false;
  public slides:Array<Array<any>> = this.mainService.getFeedback();

  // todo fix it
  // public getImage = (img:string):string => require('../../services/images/feedback/' + img);
  public getImage = ():string => '';

  public constructor(public mainService:MainService) {
  }
}
