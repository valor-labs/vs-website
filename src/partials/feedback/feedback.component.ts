import { Component, OnInit } from '@angular/core';

import { MainService } from '@services/main.service';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.html'
})

export class FeedbackComponent implements OnInit {
  public myInterval = false;
  public noWrapSlides = false;
  public slides: any[] = this.mainService.getFeedback();
  public isMobile = false;

  public constructor(public mainService: MainService) {
  }

  public ngOnInit(): void {
    this.isMobile = window.isMobile();
  }
}
