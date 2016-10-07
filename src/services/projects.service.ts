import { Injectable }    from '@angular/core';

@Injectable()
export class ProjectsService {

  public getAll(): any[] {
    const projects: any[] = require('./collections/projects.json');
    console.log(projects);

    return projects;
  }
}
