import { Component, Input } from '@angular/core';

@Component({
  selector: 'duplex-content',
  templateUrl: 'src/partials/duplex-content/duplex-content.html'
})

export class DuplexContentComponent {

  @Input() public image:string;
  @Input() public title:string;
  @Input() public text:string;
  @Input() public content:Array<any>;
  @Input() public dark:boolean;
  @Input() public textIsLeft:boolean = false;
}
