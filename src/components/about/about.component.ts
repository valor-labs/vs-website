import { Component } from '@angular/core';
require('./about.css');

@Component({
  selector: 'about',
  template: require('./about.html')
})
export class AboutComponent {
  public getImage = (img:string):string => require('./images/' + img);
}
