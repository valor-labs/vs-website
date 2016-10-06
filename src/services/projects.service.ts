import { Injectable }    from '@angular/core';

@Injectable()
export class ProjectsService {
  private path:string = 'src/assets/images/projects';

  public getImagesPath(): string {
    return this.path;
  }

  public getAll(): any[] {
    const projects: any[] = require('./projects.json');
    console.log(projects);

    return projects;
  }
}
