import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.html'
})
export class FooterComponent {
  public year: number = new Date().getFullYear();
}
