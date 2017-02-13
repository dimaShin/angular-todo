import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    this.auth.signIn(this.login, this.password)
      .then(() => this.router.navigate(['']));
  }

}
