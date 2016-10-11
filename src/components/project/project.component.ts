import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project',
  // styles: [require('./project.css')],
  template: require('./project.html')
})

export class ProjectComponent implements OnInit {
  public projectId: number;
  public constructor(public route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      /* tslint:disable */
      this.projectId = +params['projectId'];
      /* tslint:enable */
    });
  }
}
