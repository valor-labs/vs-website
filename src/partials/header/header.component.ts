import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
require('./header.css');

@Component({
    selector: 'header',
    template: require('./header.html')
})
export class HeaderComponent {
    @Input() public title: string;
    @Input() public text: string;
    @Input() public bg: string;

    public getImage = (img:string):string => {
        let i =  require('../../components' + img);
        return 'url('+this.sanitize(i)+')';
    };

    public constructor(private sanitizer:DomSanitizer) {
    }

    public sanitize(url:any):any {
        return this.sanitizer.bypassSecurityTrustStyle(url);
    }
}
