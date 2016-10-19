import { Component, Input, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

require('./top-menu.css');

@Component({
  selector: 'top-menu',
  template: require('./top-menu.html')
})
export class TopMenuComponent implements OnInit {
  public isSticky:boolean = false;
  public isOpen: boolean = false;
  public startFixedPosition:number = window.innerHeight;
  @Input() public isLanding:boolean;

  public constructor(public router:Router) {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    });
  }

  public menuToggle():void {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  public ngOnInit():void {
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
