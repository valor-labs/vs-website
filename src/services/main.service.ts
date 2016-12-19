import { Injectable }    from '@angular/core';
import { Member }    from './classes/member';
import { feedbacks } from './collections/feedback';
import { team } from './collections/team';

@Injectable()
export class MainService {

  public getTeam(): Member[] {
    let copy = JSON.parse(JSON.stringify(team));
    return copy;
  }

  public getById(memberId: number): Member {
    let team = this.getTeam();
    let i;
    team.forEach((member: Member, index:number) => {
      if(member.memberId === memberId) {
        i=index;
      }
    });
    return this.getTeam()[i];
  }

  public getFeedback():any[] {
    const maxSymbols = 130;
    const trail = '...';
    let feedback = JSON.parse(JSON.stringify(feedbacks));

    for(let i = 0; i < feedback.length; i++) {
      let text = feedback[i].text;
      feedback[i].shortText = text.length > maxSymbols ? text.substring(0, maxSymbols) + trail : text;
    }

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
    return feedbacks.find((feedback: any) => projectId === feedback.projectId);
  }
}
