import { Component, Input } from '@angular/core';

@Component({
  selector: 'duplex-content',
  templateUrl: './duplex-content.html'
})

export class DuplexContentComponent {

  @Input() public image:string;
  @Input() public title:string;
  @Input() public text:string;
  @Input() public content:Array<any>;
  @Input() public dark:boolean;
  @Input() public textIsLeft:boolean = false;

  public getImage(img:string):string {
    // return require('../../components/' + img);
    return '';
  }
}
