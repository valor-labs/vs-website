import { Component, Input, HostListener, OnInit } from '@angular/core';
require('./top-menu.css');

@Component({
  selector: 'top-menu',
  template: require('./top-menu.html')
})
export class TopMenuComponent implements OnInit {
  public isSticky:boolean = false;
  public startFixedPosition:number = window.innerHeight;
  @Input() public isLanding:boolean;

  public ngOnInit():void {
    require('./particles.min');
    require('./particles-config');
  }

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
