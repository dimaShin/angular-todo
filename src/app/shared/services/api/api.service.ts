import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Http, Request, Headers, Response, RequestMethod, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

const { API_URL } = environment;

@Injectable()
export class ApiService {

  _token: string = null;

  constructor(
    private http: Http
  ) { }

  private static getSearchParams(query: Object) : URLSearchParams {
    const params = new URLSearchParams();
    for (let i in query) {
      if (query.hasOwnProperty(i)) {
        params.set(i, query[i]);
      }
    }

    return params;
  }

  get(url, query: Object = {}): Observable<any> {
    const search = ApiService.getSearchParams(query);
    const request = new Request({
      url,
      method: RequestMethod.Get,
      search
    });

    return this._request(request);
  }

  post(url, body) {
    const request = new Request({
      url,
      method: RequestMethod.Post,
      body
    });

    return this._request(request);
  }

  del(url, body) {
    const request = new Request({
      url,
      method: RequestMethod.Delete,
      body
    });

    return this._request(request);
  }

  patch(url, body) {
    const request = new Request({
      url,
      method: RequestMethod.Patch,
      body
    });

    return this._request(request);
  }

  _request(request: Request) : Observable<any> {

    if (!request.headers) {
      request.headers = new Headers({'x-token': this.token});
    } else {
      request.headers.append('x-token', this.token);
    }

    request.url = `${API_URL}${request.url}`;

    return this.http.request(request).map((response: Response) => response.json());
  }

  public get token(): string {
    if (!this._token) {
      this._token = window.localStorage.getItem('x-token');
    }
    return this._token;
  }

  public set token(token: string) {
    this._token = token;
    window.localStorage.setItem('x-token', token);
  }
}
