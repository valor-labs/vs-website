import { Injectable } from '@angular/core';
import { Project } from '../services/classes/project';
import { projects } from '../services/collections/projects';

@Injectable()
export class ProjectsService {

  public getAll(): Project[] {
    let copy = JSON.parse(JSON.stringify(projects));
    return copy;
  }

  public getByLink(projectLink: string): any {
    const projects: Project[] = this.getAll();
    return projects.find((project: Project) => projectLink === project.link);
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
