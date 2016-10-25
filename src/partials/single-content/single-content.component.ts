import { Component, OnInit, Input } from '@angular/core';

import { ContentService } from '../../services/content.service';

import { ContentItem } from '../../services/classes/content-item';

@Component({
  selector: 'single-content',
  templateUrl: './single-content.html'
})

export class SingleContentComponent implements OnInit {
  @Input() public contentId: string;

  public content: ContentItem;

  public ngOnInit(): void {
    const content: any = this.contentService.getContent(this.contentId);

    this.content = content;
  }

  public constructor(public contentService: ContentService) {}
}
