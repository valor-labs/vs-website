import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'header',
  templateUrl: 'src/partials/header/header.html'
})
export class HeaderComponent implements OnInit {
  @Input() public title:string;
  @Input() public subtitle:string;
  @Input() public text:string;
  @Input() public bg:string;

  public url:SafeStyle;

  public constructor(private sanitizer:DomSanitizer) {

  }

  public ngOnInit():void {
    this.url = this.sanitize(this.bg);
  }

  public sanitize(url:any):any {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }
}
