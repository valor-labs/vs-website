import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';

require('./about.css');

@Component({
  selector: 'about',
  template: require('./about.html')
})
export class AboutComponent implements OnInit {
  private location: Location;
  private urlEvents: Subject<any>;

  public getImage = (img: string): string => require('./images/' + img);

  public constructor(@Inject(Location) location: Location) {
    this.urlEvents = new Subject();
    this.location = location;
  }

  public ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let urlPath = location.hash;

    if (urlPath.indexOf('culture') !== -1) {
      document.getElementById('our-culture').scrollIntoView();
    }
  }

}
