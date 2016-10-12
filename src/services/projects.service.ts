import { Injectable }    from '@angular/core';

@Injectable()
export class ProjectsService {

  public getAll(): any[] {
    const projects: any[] = require('./collections/projects.json');
    return projects;
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
  public getSimilarTo(projectId: number): any[] {
    console.log(projectId);
    const projects: any[] = require('./collections/projects.json');
    projects.splice(projectId, 1);
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
