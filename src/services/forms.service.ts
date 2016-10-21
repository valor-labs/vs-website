import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from './config.service';

export class FormsMailService {
  public http: Http;

  public constructor(@Inject(Http) http: Http, @Inject(Config) public config: any) {
    this.http = http;
  }

  public sendEmail(query: any, endpoint: string): Observable<any> {
    // send query to the server
    return this.http.post(`${this.config.apiUrl}/url/blablabla/${endpoint}`, query).map((res: any) => {
      let parseRes = JSON.parse(res._body);

      console.log(parseRes);
        // send the marker, that everything is ok (or not)
      return {err: parseRes.error};
    });
  }
}
