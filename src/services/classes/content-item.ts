export class ContentItem {
  public constructor(public contentId: number,
                     public title: string,
                     public description: string,
                     public content: string,
                     public linkText: string,
                     public columns: {}[],
                     public link: string) {
  }
}
