export class Project {
  public constructor(public projectId:number,
                     public title:string,
                     public shortDescription:string,
                     public description:string,
                     public previewImage:string,
                     public fullImage:string,
                     public externalLink:string,
                     public headerImage:string,
                     public video:any,
                     public details:any[],
                     public technology:string[],
                     public similarTo:number[],
                     public link:string) {
  };
}
