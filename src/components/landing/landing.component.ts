import { Component } from '@angular/core';

@Component({
  selector: 'landing',
  styles: [require('./landing.css')],
  template: require('./landing.html')
})
export class LandingComponent {
  public getImage = (img:string):string => require('./images/' + img);
}
