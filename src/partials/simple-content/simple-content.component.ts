import { Component, OnInit, Input } from '@angular/core';

import { ContentService } from '../../services/content.service';

export class SimpleContentItem {
  public constructor(public contentId:number,
                     public title: string,
                     public description: string,
                     public content: string,
                     public linkText: string,
                     public link: string) {
  };
}

@Component({
  selector: 'simple-content',
  template: require('./simple-content.html')
})

export class SimpleContentComponent implements OnInit {
  @Input() public contentId: number;

  public contentItem: SimpleContentItem;

  public ngOnInit(): void {

    let content: any = this.contentService.getSimpleContent(this.contentId);
    content.images.forEach((image: string, index: number) => {
      const decodedImage = require(`./images/${image}`);
      content.content = content.content.replace(`[#image_${index}#]`, `<img src="${decodedImage}" alt="#">`);
    });

    this.contentItem = content;
  }

  public constructor(public contentService: ContentService) {}
}
