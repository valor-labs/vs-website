import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'feedback',
  templateUrl: 'src/partials/feedback/feedback.html'
})

export class FeedbackComponent {
  public myInterval:number = 15000;
  public noWrapSlides:boolean = false;
  public slides:Array<Array<any>> = this.mainService.getFeedback();

  public constructor(public mainService:MainService) {
  }
}
