import { Injectable }    from '@angular/core';

@Injectable()
export class MainService {
  public getTeam():any[] {
    const team: any[] = require('./collections/team.json');
    return team;
  }

  public getFeedback():any[] {
    let feedback = require('./collections/feedback.json');
    const arrayCount = Math.ceil(feedback.length / 2);
    let slides:Array<any> = [];
    for (let i = 0; i < arrayCount; i++) {
      let left = feedback[((i + 1) * 2 - 1) - 1];
      let right = feedback[((i + 1) * 2 - 1)];
      slides[i] = [left];
      if (right) {
        slides[i].push(right);
      }
    }
    return slides;
  }
}
