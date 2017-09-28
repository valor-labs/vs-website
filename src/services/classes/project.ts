export class Project {
  public constructor(public projectId: number,
                     public title: string,
                     public shortDescription: string,
                     public description: string,
                     public previewImage: string,
                     public fullImage: string,
                     public externalLink: string,
                     public headerImage: string,
                     public video: {},
                     public details: {
                       tasks: {}[];
                       solutions: {}[];
                       outcome: {}[];
                     },
                     public technology: string[],
                     public similarTo: number[],
                     public members: number[],
                     public link: string,
                     public behanceLink: string,
                     public formattedTechnologies: {}[],
                     public formattedMembers: {}[],
                     public reference: {
                       name: string;
                       position: string;
                       text: string;
                       photo: string;
                     }) {
  }
}
