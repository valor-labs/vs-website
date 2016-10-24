import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {
  private location: Location;
  private urlEvents: Subject<any>;

  //todo: what???
  //  public getImage = (img: string): string => require('./images/' + img);
   public getImage = (img: string): string => '';

  public constructor(@Inject(Location) location: Location) {
    this.urlEvents = new Subject();
    this.location = location;
  }

  public ngOnInit(): void {
    let urlPath = location.hash;

    if (urlPath.indexOf('culture') !== -1) {
      document.getElementById('our-culture').scrollIntoView();
    }
  }

}
