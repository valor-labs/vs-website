export class Vacancy {
  public constructor(public vacancyId: number,
                     public name: string,
                     public description: string,
                     public responsibilities: string[],
                     public requirements: string [],
                     public location: string,
                     public requirementsPlus: string[],
                     public offer: string[],
                     public headerImage: string) {
  }
}
