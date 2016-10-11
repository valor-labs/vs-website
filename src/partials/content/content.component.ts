import { Component, OnInit, Input } from '@angular/core';

import { ContentService } from '../../services/content.service';

export class ContentItem {
  public constructor(public contentId:number,
                     public title: string,
                     public description: string,
                     public content: string,
                     public linkText: string,
                     public link: string) {
  };
}

@Component({
  selector: 'content',
  template: require('./content.html')
})

export class ContentComponent implements OnInit {
  @Input() public contentId: number;

  public content: ContentItem;

  public getImage(img:string):string {
    return require('./images/' + img);
  }

  public ngOnInit(): void {
    const content: any = this.contentService.getContent(this.contentId);

    this.content = content;
  }

  public constructor(public contentService: ContentService) {}
}
