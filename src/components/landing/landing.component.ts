import { Component, OnInit } from '@angular/core';
require('./landing.css');

@Component({
  selector: 'landing',
  template: require('./landing.html')
})
export class LandingComponent implements OnInit {
  public isMobile: boolean;

  public ngOnInit(): void {
    this.isMobile = window.isMobile();
  }

  public getImage = (img:string):string => require('./images/' + img);
}
