import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'

})
export class AppComponent {
  public constructor(private _titleService: Title, private _router: Router) {
    _router.events.subscribe((date: any) => {
      if (date.constructor.name === 'NavigationStart') {
        try {
          let title = 'Valor Software';
          const url = date.url;

          // /about -> About. /some-link -> Some Link
          // Team member's, project's and other dynamic page's titles sets up in their own components
          const titlePositionStart = url.lastIndexOf('/');
          if (titlePositionStart === 0) {
            title = url.substr(titlePositionStart + 1)
              .replace(/-/g, ' ')
              .replace(/\w\S*/g, (txt: any) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
          }
          _titleService.setTitle(title);

        } catch (e) {
          console.log(e);
        }
      }
    });
  }
}
