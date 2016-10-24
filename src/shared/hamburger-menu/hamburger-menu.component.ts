import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
require('./hamburger-menu.css');

@Component({
  selector: 'hamburger-menu',
  template: require('./hamburger-menu.html')
})

export class HamburgerMenuComponent implements OnInit {
  public isOpen: boolean = false;

  public ngOnInit(): void {
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd) {
        if(event.url !== '/') {
          document.body.style.overflow = 'auto';
          window.ontouchmove = null;
          this.isOpen = false;
        }
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
      document.body.style.overflow = 'hidden';
      window.ontouchmove = preventTouchMove;
    } else {
      document.body.style.overflow = 'auto';
      window.ontouchmove = null;
    }
  }

  public constructor(public router:Router) {

  }
}
