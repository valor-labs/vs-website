import { Injectable }    from '@angular/core';

@Injectable()
export class MainService {
  public getTeam(): any[] {
    return require('./collections/team.json');
  }
}
