import { Injectable } from '@angular/core';
import { content } from './collections/content';

@Injectable()
export class ContentService {
  public getContent(id: string): any {
    return content.find((item: any) => id === item.contentId);
  }
}
