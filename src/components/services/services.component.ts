import { Component } from '@angular/core';

@Component({
  selector: 'services',
  styles: [require('./services.css')],
  template: require('./services.html')
})
export class ServicesComponent {
  public isCollapsed:boolean = false;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }
}
