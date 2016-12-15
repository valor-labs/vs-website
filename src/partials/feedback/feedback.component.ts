import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.html'
})

export class FeedbackComponent {
  public noWrapSlides:boolean = false;
  public slides:any[] = this.mainService.getFeedback();

  public constructor(public mainService:MainService) {
  }
}
