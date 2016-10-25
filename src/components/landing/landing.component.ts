import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: 'src/components/landing/landing.html'
})
export class LandingComponent implements OnInit {
  public isMobile: boolean;

  public ngOnInit(): void {
    this.isMobile = window.isMobile();
  }
}
