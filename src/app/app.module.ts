import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {AuthService} from "./shared/services/auth/auth.service";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'auth',
        pathMatch: 'prefix',
        loadChildren: './auth/auth.module.ts#AuthModule'

      },
      {
        path: '',
        loadChildren: './dashboard/dashboard.module.ts#DashboardModule',
        canActivate: [AuthService],
        pathMatch: 'prefix'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]),
    SharedModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.baseHref }],
  bootstrap: [AppComponent]
})
export class AppModule { }
