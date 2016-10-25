import { Injectable }    from '@angular/core';
import { Project }    from '../services/classes/project';

@Injectable()
export class ProjectsService {

  public getAll(): Project[] {
    const projects: Project[] = [];
    // const projects: Project[] = require('./collections/projects.json');
    let projectsList: Project[] = [];

    projects.forEach((project: Project) => {
      projectsList.push(Object.assign({}, project));
    });
    return projectsList;
  }

  public getByLink(projectLink: string): any {
    const projects: Project[] = this.getAll();
    // todo: add Project type
    return projects.find((project: any) => projectLink === project.link);
  }

  /**
   * Now - just return shuffled array of products, in future, maybe - returns similar items
   * @param projectLink: String
   * @returns {Project[]}
   */

  public getSimilarTo(projectLink: string): Project[] {
    let projects: Project[] = this.getAll()
      .filter((project: Project) => {
        return projectLink !== project.link;
      });

    return this.shuffleArray(projects);
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
