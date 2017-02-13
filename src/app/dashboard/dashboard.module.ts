import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TodoListComponent} from "./todo-list/todo-list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent
      }
    ])
  ],
  declarations: [ TodoListComponent ]
})
export class DashboardModule { }
