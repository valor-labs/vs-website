import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  styles: [require('./top-menu.css')],
  template: require('./top-menu.html')
})
export class TopMenuComponent {
  public constructor(public router: Router) { }
}
