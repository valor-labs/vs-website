import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent implements OnInit {
  public isMobile: boolean;

  public ngOnInit(): void {
    this.isMobile = window.isMobile();
  }

  //todo: wat???
  // public getImage = (img:string):string => require('./images/' + img);
  public getImage = (img:string):string => '';
}
