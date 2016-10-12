import { Component, Input } from '@angular/core';

@Component({
  selector:'project-details',
  template: require('./project-details.html')
})

export class ProjectDetailsComponent {
  @Input() public project: any; // todo: add Project type
}
