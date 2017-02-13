import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "./services/api/api.service";
import {HttpModule} from "@angular/http";
import {AuthService} from "./services/auth/auth.service";
import {TodoService} from "./services/todo/todo.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [ApiService, AuthService, TodoService]
})
export class SharedModule { }
