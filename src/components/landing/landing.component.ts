import { Component } from '@angular/core';
require('./landing.css');

@Component({
  selector: 'landing',
  template: require('./landing.html')
})
export class LandingComponent {
  public getImage = (img:string):string => require('./images/' + img);
}
