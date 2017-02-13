import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {CanActivate, Router} from "@angular/router";
import * as Promise from "../../../../../../../../Library/Preferences/WebStorm2016.3/javascript/extLibs/http_github.com_DefinitelyTyped_DefinitelyTyped_raw_master_promise_index";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {toPromise} from "rxjs/operator/toPromise";
import {Observable} from "rxjs";

@Injectable()
export class AuthService implements CanActivate{

  loggedIn: boolean = false;

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  signIn(login, password): Promise<any> {
    return this.api.post('/login', {login, password })
      .map(response => {
        if (response.token) {
          this.api.token = response.token;
          this.loggedIn = true;
          return response;
        }
      }).toPromise();
  }

  canActivate(): Promise<boolean> | Observable<boolean>| boolean {

    if (!this.api.token) {
      this.router.navigate(['auth']);
      return false;
    }

    if (this.loggedIn) {
      return true;
    }

    return this.api.get('/api/me')
      .map(payload => payload.loggedIn)
      .map(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['auth']);
        }
        return loggedIn;
      });
  }
}
