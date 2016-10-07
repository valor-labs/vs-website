import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'top-menu',
  styles: [require('./top-menu.css')],
  template: require('./top-menu.html')
})
export class TopMenuComponent {
  public isSticky: boolean = false;
  public startFixedPosition: number = window.innerHeight;
  @Input() public isLanding:boolean;
  // tslint:disable
  @HostListener('window:scroll', ['$event']) private scroll () {
    if(window.scrollY > this.startFixedPosition) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
