export class Member {
  public constructor(public memberId: number,
                     public show: boolean,
                     public name: string,
                     public url: string,
                     public position: string,
                     public description: string[],
                     public avatar: string,
                     public fullImage: string,
                     public socials: any,
                     public skills: number[]) {
  }
}
