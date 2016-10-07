import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  styles: [require('./top-menu.css')],
  template: require('./top-menu.html')
})
export class TopMenuComponent {
  public isSticky: boolean = false;
  public startFixedPosition: number = window.innerHeight;
  public constructor(public router: Router) {

  }
  @HostListener('window:scroll', ['$event']) private scroll () {
    if(window.scrollY > this.startFixedPosition) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
