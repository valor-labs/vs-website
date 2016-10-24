import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from './config.service';

@Injectable()
export class MailService {
  public constructor(private http:Http, @Inject(Config) public config:any) {
  }

  public sendEmail(query:any, endpoint:string):Observable<any> {
    // send query to the server
    return this.http.post(`${this.config.apiUrl}/send/${endpoint}`, query).map((res:any) => {
      let parseRes = JSON.parse(res._body);
      return {err: parseRes.error};
    });
  }
}
