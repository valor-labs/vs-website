import { Component, Input, HostListener } from '@angular/core';
require('./top-menu.css');

@Component({
  selector: 'top-menu',
  template: require('./top-menu.html')
})
export class TopMenuComponent {
  public isSticky:boolean = false;
  public startFixedPosition:number = window.innerHeight;
  @Input() public isLanding:boolean;
  // tslint:disable
  @HostListener('window:scroll', ['$event'])
  private scroll() {
    if (window.scrollY > this.startFixedPosition) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
