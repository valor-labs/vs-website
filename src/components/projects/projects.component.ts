import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  // styles: [require('./projects.css')],
  template: require('./projects.html')
})
export class ProjectsComponent implements OnInit {
  public ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
