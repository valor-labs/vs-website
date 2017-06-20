import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

const headers  = new Headers();
const proxy = 'https://cors-anywhere.herokuapp.com/';
headers.append('Content-Type', 'text/plain');
headers.append('accept-version', '1.0.0');
headers.append('Authorization', 'Bearer 1c627482011f07e5246ae8cdd4de4940e4490bf39e1ad87aab109618095db8d9');
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

  public getEmployeesItems(): any {
    const url = proxy + 'https://api.webflow.com/collections/5937d41ace6a82620374999f/items';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }

  public getSocialsItems(): any {
    const url = proxy + 'https://api.webflow.com/collections/5937e44f1ac453072c0afef7/items';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }

  public geProjectsItems(): any {
    const url = proxy + 'https://api.webflow.com/collections/5937d8a11ac453072c0afdf7/items';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }

  public getReferencesItems(): any {
    const url = proxy + 'https://api.webflow.com/collections/5937da46ce6a826203749c66/items';
    return this.http.get(url, options).map((res:any) =>  res.json());
  }
}
