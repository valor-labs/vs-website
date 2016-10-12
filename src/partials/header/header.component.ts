import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
require('./header.css');

@Component({
  selector: 'header',
  template: require('./header.html')
})
export class HeaderComponent implements OnInit {
  @Input() public title:string;
  @Input() public text:string;
  @Input() public bg:string;

  public url:SafeStyle;

  public constructor(private sanitizer:DomSanitizer) {

  }

  public ngOnInit():void {
    this.url = this.sanitize(require('../../components/' + this.bg));
  }

  public sanitize(url:any):any {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }
}
