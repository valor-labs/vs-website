import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'main',
  styleUrls: ['./main.css'],
  templateUrl: './main.html'
})
export class MainComponent {
  public isLanding:boolean = false;

  public constructor(public router:Router) {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/') {
          return this.isLanding = false;
        }
        this.isLanding = true;
      }
    });
  }
}
