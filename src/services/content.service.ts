import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  public getContent(index: number): any {
    const content = require('./collections/content.json');
    return content[index];
  }
}
