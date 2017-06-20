import { Injectable } from '@angular/core';

import { Project } from '../services/classes/project';
import { WebflowService } from '@app/services/webflow-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService {
  public constructor(public webflowService: WebflowService) {}

  public getAll(): Observable<any> {
    return this.webflowService.geProjectsItems().map((data: any) => {
      return data.items;
    });
  }

  public getByLink(projectLink: string): any {
    return this.webflowService.geProjectsItems().map((data: any) => {
      return data.items.find((project: Project) => projectLink === project.slug);
    });
  }

  /**
   * Now - just return shuffled array of products, in future, maybe - returns similar items
   * @param projectLink: String
   * @returns {Project[]}
   */

  public getSimilarTo(projectLink: string): Observable<any> {
    let projects = [];
    return this.webflowService.geProjectsItems().map((data: any) => {
      projects = data.items.filter((project: Project) => {
        return projectLink !== project.slug;
      });
      return this.shuffleArray(projects);
    });
  }

  public getParticipant(memberProjectsIds: string[]): Observable<any> {
    let projects = [];
    return this.webflowService.geProjectsItems().map((data: any) => {
      memberProjectsIds.forEach((projectId: string) => {
        data.items.forEach((project: Project) => {
          if (project._id.indexOf(projectId) !== -1) {
            projects.push(project);
          }
        });
      });
      return projects;
    });
  }

  /**
   * Shuffles array
   * @param array<T>
   * @returns {array<T>}
   */
  private shuffleArray(array: any[]): any[] {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      const index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      const temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }
}
