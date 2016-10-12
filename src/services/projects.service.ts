import { Injectable }    from '@angular/core';
import { Project }    from '../partials/projects-list/projects-list.component';

@Injectable()
export class ProjectsService {

  public getAll(): Project[] {
    const projects: Project[] = require('./collections/projects.json');
    let projectsList: Project[] = [];

    projects.forEach((project: Project) => {
      projectsList.push(Object.assign({}, project));
    });
    return projectsList;
  }

  public getByLink(projectLink: string): any {
    const projects: any[] = require('./collections/projects.json');
    // todo: add Project type
    return projects.filter((project: any) => project.link === projectLink)[0];
  }

  public getById(id: number): any {
    const projects: any[] = require('./collections/projects.json');
    // todo: add Project type
    return projects.filter((project: any) => project.id === id)[0];
  }

  /**
   * Now - just return shuffled array of products, in future, maybe - returns similar items
   * @param projectId: Number
   * @returns {any[]}
   */

  public getSimilarTo(projectLink: string): any[] {
    console.log(projectLink);

    const projects: Project[] = require('./collections/projects.json');
    let projectsList: Project[] = [];

    projects.forEach((project: Project) => {
      projectsList.push(Object.assign({}, project));
    });
    // projectsList.splice(projectId, 1);
    return this.shuffleArray(projectsList);

  }

  /**
   * Shuffles array
   * @param array
   * @returns {any[]}
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
