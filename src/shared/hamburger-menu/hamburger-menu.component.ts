import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.html'
})

export class HamburgerMenuComponent implements OnInit {
  public isOpen = false;

  constructor(public router: Router) {

  }

  public ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/') {
          document.body.style.overflow = 'auto';
          document.body.className = '';
          window.ontouchmove = null;
          this.isOpen = false;
        }
      }
    });
  }

  public menuToggle(): void {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.className = 'menu-opened';
      window.ontouchmove = window.preventTouchMove;
    } else {
      document.body.style.overflow = 'auto';
      document.body.className = '';
      window.ontouchmove = null;
    }
  }
}
