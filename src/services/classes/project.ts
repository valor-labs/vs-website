export class Project {
  public constructor(public projectId:number,
                     public title:string,
                     public name:string,
                     public shortDescription:string,
                     public description:string,
                     public previewImage:string,
                     public fullImage:string,
                     public externalLink:string,
                     public headerImage:string,
                     public _id:string,
                     public video:any,
                     public details:any[],
                     public technology:string[],
                     public similarTo:number[],
                     public members:number[],
                     public slug:string,
                     public reference:Object,
                     public link:string) {
  };
}
