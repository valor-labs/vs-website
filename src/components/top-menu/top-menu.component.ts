import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  styles: [require('./top-menu.css')],
  template: require('./top-menu.html')
})
export class TopMenuComponent {
  @Input() public isLanding:boolean;

  public constructor(public router:Router) {

  }
}
