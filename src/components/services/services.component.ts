import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services',
  // styles: [require('./services.css')],
  template: require('./services.html')
})
export class ServicesComponent implements OnInit {
  // public isCollapsed:boolean = false;
  //
  // public collapsed(event:any):void {
  //   console.log(event);
  // }
  //
  // public expanded(event:any):void {
  //   console.log(event);
  // }

  public ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
