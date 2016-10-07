import { Injectable }    from '@angular/core';

@Injectable()
export class ProjectsService {

  public getAll(): any[] {
    const projects: any[] = require('./collections/projects.json');
    return projects;
  }

  /**
   * Now - just return shuffled array of products, in future, maybe - returns similar items
   * @param projectId: Number
   * @returns {any[]}
   */
  public getSimilarTo(projectId: number): any[] {
    console.log(projectId);
    const projects: any[] = require('./collections/projects.json');

    return this.shuffleProjectsArray(projects);
  }

  /**
   * Shuffles array
   * @param array
   * @returns {any[]}
   */
  private shuffleProjectsArray(array: any[]): any[] {
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
