import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project',
  // styles: [require('./project.css')],
  template: require('./project.html')
})

export class ProjectComponent implements OnInit {
  public projectLink: string;
  public constructor(public route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      /* tslint:disable */
      this.projectLink = params['projectLink'];
      /* tslint:enable */
    });
  }
}
