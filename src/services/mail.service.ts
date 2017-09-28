import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class MailService {
  public constructor(private http: Http) {
  }

  public sendEmail(query: any, endpoint: string): Observable<any> {
    // send query to the server
    return this.http.post(`${environment.apiUrl}/send/${endpoint}`, query).map((res: any) => {
      const parseRes = JSON.parse(res._body);

      return {err: parseRes.error};
    });
  }
}
