import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
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

    // already required image
    if (this.bg.indexOf('/') === -1 ) {
      this.url = this.sanitize(this.bg);
    } else {
      // not required yet
      // this.url = this.sanitize(require('../../components/' + this.bg));
      this.url = this.sanitize('');
    }
  }

  public sanitize(url:any):any {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }
}
