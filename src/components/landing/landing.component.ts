import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.html'
})

export class LandingComponent implements OnInit {
  public isMobile: boolean;

  public ngOnInit(): void {
    this.isMobile = window.isMobile();
  }
}
