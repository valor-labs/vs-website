import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-heading',
  template: require('./section-heading.html')
})

export class SectionHeadingComponent {
  @Input() public title: string;
  @Input() public description: string;
}
