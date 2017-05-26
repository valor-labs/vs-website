import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
const headers  = new Headers();
const proxy = 'https://cors-anywhere.herokuapp.com/';
headers.append('Content-Type', 'text/plain');
headers.append('accept-version', '1.0.0');
headers.append('Authorization', 'Bearer f0306d19ca0b1ab5698568daea782d117373f2f57226c658c37b24686768488a');
headers.append('Accept-Type', 'text/plain');
const options = new RequestOptions({headers});

@Injectable()
export class WebflowService {

  public constructor(private http: Http) {
  }

  public getSites(): any {
    let url =  proxy + 'https://api.webflow.com/sites';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }

  public getCollections(): any {
    const url =  proxy + 'https://api.webflow.com/sites/59280646e5165e14b7b8d2ff/collections';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }

  public getVacancies(): any {
    const url =  proxy + 'https://api.webflow.com/collections/592c00f1e7a6b9430e5020a1';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }

  public getVacanciesItems(): any {
    const url = proxy + 'https://api.webflow.com/collections/592c00f1e7a6b9430e5020a1/items';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }

  public getBenefitsItems(): any {
    const url = proxy + 'https://api.webflow.com/collections/592c017e2940516ee254a385/items';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }
}
