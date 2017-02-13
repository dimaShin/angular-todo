import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {CanActivate, Router} from "@angular/router";
import * as Promise from "../../../../../../../../Library/Preferences/WebStorm2016.3/javascript/extLibs/http_github.com_DefinitelyTyped_DefinitelyTyped_raw_master_promise_index";

@Injectable()
export class AuthService implements CanActivate{

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> | boolean {

    if (!this.api.token) {
      this.router.navigate(['auth']);
      return false;
    }

    return this.api.get('/me', {me: 'me', second: 2})
      .map(response => response.json())
      .map(payload => !!payload.loggedIn)
      .map(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['auth']);
        }
        return loggedIn;
      })
      .toPromise();
  }
}
