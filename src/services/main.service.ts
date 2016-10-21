import { Injectable }    from '@angular/core';
import { Member }    from './classes/member';

@Injectable()
export class MainService {

  public getTeam(): Member[] {
    const team: Member[] = require('./collections/team.json');
    let copy = JSON.parse(JSON.stringify(team));
    return copy;
  }

  public getById(memberId: number): Member {
    return this.getTeam()[memberId];
  }

  public getFeedback():any[] {
    let feedback = require('./collections/feedback.json');
    const arrayCount = Math.ceil(feedback.length / 2);
    let slides:Array<any> = [];
    if(!window.isMobile()) {
      for (let i = 0; i < arrayCount; i++) {
        let left = feedback[((i + 1) * 2 - 1) - 1];
        let right = feedback[((i + 1) * 2 - 1)];
        slides[i] = [left];
        if (right) {
          slides[i].push(right);
        }
      }
    } else {
      for (let i = 0; i < feedback.length; i++) {
        slides[i] = [feedback[i]];
      }
    }
    return slides;
  }

  public getFeedbackForProject(projectId: number): any {
    const feedbacksList = require('./collections/feedback.json');
    return feedbacksList.find((feedback: any) => projectId === feedback.projectId);
  }
}
