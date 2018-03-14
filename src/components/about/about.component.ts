import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'about',
  templateUrl: './about.html'
})
export class AboutComponent implements OnInit {
  // private urlEvents: Subject<any>;

  constructor(private route: ActivatedRoute) {
    // this.urlEvents = new Subject();
  }

  public ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      const urlPath = fragment;

      if (urlPath && urlPath.indexOf('culture') !== -1) {
        document.getElementById('our-culture').scrollIntoView();
      }
    });
  }
}
