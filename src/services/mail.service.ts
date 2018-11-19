import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class MailService {
  public constructor(private http: HttpClient) {
  }

  public sendEmail(query: any, endpoint: string): Observable<any> {
    // send query to the server
    return this.http.post(`${ environment.apiUrl }/send/${ endpoint }`, query);
  }
}
