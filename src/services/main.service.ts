/* tslint:disable:no-magic-numbers */

import { Injectable } from '@angular/core';
import { Member } from './classes/member';
import { feedbacks } from './collections/feedback';
import { team } from './collections/team';

@Injectable()
export class MainService {

  public getTeam(): Member[] {
    const copy = JSON.parse(JSON.stringify(team));

    return copy;
  }

  public getMemberByUrl(memberUrl: string): Member {
    const parsedTeam = this.getTeam();

    return parsedTeam.find((member: Member) => memberUrl === member.url);
  }

  public getFeedback(): any[] {
    const maxSymbols = 130;
    const trail = '...';
    const feedback = JSON.parse(JSON.stringify(feedbacks));

    for (const item of feedback) {
      const text = item.text;
      item.shortText = text.length > maxSymbols ? `${text.substring(0, maxSymbols)}${trail}` : text;
    }

    const arrayCount = Math.ceil(feedback.length / 2);
    const slides: any[] = [];
    if (!window.isMobile()) {
      for (let i = 0; i < arrayCount; i++) {
        const left = feedback[((i + 1) * 2 - 1) - 1];
        const right = feedback[((i + 1) * 2 - 1)];
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
