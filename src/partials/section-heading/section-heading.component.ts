import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-heading',
  template: './section-heading.html'
})

export class SectionHeadingComponent {
  @Input() public title: string;
  @Input() public description: string;
  @Input() public additionalText: string;
  @Input() public additionalLink: string;
  @Input() public additionalLinkText: string;
}
