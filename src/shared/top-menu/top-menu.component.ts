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
  public menuHeight: number;
  @Input() public isLanding:boolean;

  public constructor(public router:Router) {
    this.router.events.subscribe((event:any) => {
      this.isOpen = false;
      if (event instanceof NavigationEnd) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    });
  }

  public menuToggle():void {
    this.isOpen = !this.isOpen;

    let preventTouchMove = (e:any) => {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.returnValue = false;
    };

    if (this.isOpen) {
      window.ontouchmove = preventTouchMove;
      document.body.style.overflow = 'hidden';
    } else {
      window.ontouchmove = null;
      document.body.style.overflow = 'auto';
    }
  }

  public ngOnInit():void {
    let menuItem: any = document.getElementsByClassName('menu')[0];
    this.menuHeight = menuItem.offsetHeight;
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
