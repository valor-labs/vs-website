import { Component, Input, HostListener, OnInit, Renderer } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.html'
})
export class TopMenuComponent implements OnInit {
  public isSticky = false;
  public isOpen = false;
  public startFixedPosition: number = window.innerHeight;
  public elHeight: number;
  @Input() public isLanding: boolean;

  public constructor(public router: Router, public renderer: Renderer, public location: Location) {
    this.router.events.subscribe((event: any) => {
      document.body.style.overflow = 'auto';
      document.body.className = '';
      window.ontouchmove = null;
      this.isOpen = false;
      if (event instanceof NavigationEnd) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const el = document.querySelector<HTMLElement>(`#${tree.fragment}`);
          if (el) {
            const elPosition = el.offsetTop;
            document.body.scrollTop = document.documentElement.scrollTop = elPosition - this.elHeight;
          }
        }
      }
    });
  }

  public menuToggle(): void {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      window.ontouchmove = window.preventTouchMove;
      document.body.style.overflow = 'hidden';
    } else {
      window.ontouchmove = null;
      document.body.style.overflow = 'auto';
    }
  }

  public ngOnInit(): void {
    window.initParticles();
  }


  @HostListener('window:scroll', ['$event'])
  private scroll() { // tslint:disable-line:no-unused-variable
    this.isSticky = window.scrollY > this.startFixedPosition;
  }
}
