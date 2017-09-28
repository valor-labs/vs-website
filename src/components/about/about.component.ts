import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
// import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'about',
  templateUrl: './about.html'
})
export class AboutComponent implements OnInit {
  private location: Location;
  // private urlEvents: Subject<any>;

  constructor(@Inject(Location) location: Location) {
    // this.urlEvents = new Subject();
    this.location = location;
  }

  public ngOnInit(): void {
    const urlPath = location.hash;

    if (urlPath.indexOf('culture') !== -1) {
      document.getElementById('our-culture').scrollIntoView();
    }
  }

}
