import { Component, Input,OnDestroy, OnChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnDestroy, OnChanges {
  @Input() public title:string;
  @Input() public subtitle:string;
  @Input() public text:string;
  @Input() public bg:string;
  @Input() public location:string;

  public url:SafeStyle;
  public sub:any;

  public constructor(private sanitizer:DomSanitizer,private route:ActivatedRoute) {
  }

  public ngOnChanges():void {
    this.sub = this.route.params.subscribe((params:any) => {
      this.url = this.sanitize(this.bg);
    });
  }

  public ngOnDestroy():void {
    this.sub.unsubscribe();
  }

  public sanitize(url:any):any {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }
}
