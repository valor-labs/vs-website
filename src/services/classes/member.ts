export class Member {
  public constructor(public memberId:number,
                     public name:string,
                     public position:string,
                     public description:string[],
                     public avatar:string,
                     public fullImage:string,
                     public socials:any,
                     public skills:number[]) {
  };
}
