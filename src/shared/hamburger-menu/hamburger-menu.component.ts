import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'hamburger-menu',
    styles: [require('./hamburger-menu.css')],
    template: require('./hamburger-menu.html')
})
export class HamburgerMenuComponent {
    public isOpen: boolean = false;
    private keys: any = {32: 1, 33: 1, 34: 1, 37: 1, 38: 1, 39: 1, 40: 1};

    public menuToggle():void {
        this.isOpen = !this.isOpen;

        let preventDefault = (e:any) => {
            e = e || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        };

        let preventDefaultForScrollKeys = (e:any) => {
            if (this.keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        };

        if(this.isOpen) {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            }
            window.onwheel = preventDefault;
            window.onmousewheel = document.onmousewheel = preventDefault;
            window.ontouchmove  = preventDefault;
            document.onkeydown  = preventDefaultForScrollKeys;
        } else {
            if (window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            }
            window.onmousewheel = document.onmousewheel = null;
            window.onwheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;
        }
    }

    public constructor(public router: Router) { }
}
