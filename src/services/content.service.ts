import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  public getSimpleContent(index: number): any {
    const content = require('./collections/simple-content-collection.json');
    return content[index];
  }
}
