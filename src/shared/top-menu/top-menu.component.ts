import { Component, Input, HostListener, OnInit, Renderer } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.html'
})
export class TopMenuComponent implements OnInit {
  public isSticky:boolean = false;
  public isOpen: boolean = false;
  public startFixedPosition:number = window.innerHeight;
  public elHeight: number;
  @Input() public isLanding:boolean;

  public constructor(public router:Router, public renderer: Renderer, public location: Location) {
    this.router.events.subscribe((event:any) => {
      document.body.style.overflow = 'auto';
      document.body.className = '';
      window.ontouchmove = null;
      this.isOpen = false;
      if (event instanceof NavigationEnd) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const el = document.querySelector('#' + tree.fragment) as HTMLElement;
          if (el) {
            let elPosition = el.offsetTop;
            document.body.scrollTop = document.documentElement.scrollTop = elPosition - this.elHeight;
          }
        }
      }
    });
  }

  public menuToggle():void {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      window.ontouchmove = window.preventTouchMove;
      document.body.style.overflow = 'hidden';
    } else {
      window.ontouchmove = null;
      document.body.style.overflow = 'auto';
    }
  }

  public ngOnInit():void {
    window.initParticles();
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
