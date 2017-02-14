import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoDetailsComponent} from "./todo-details/todo-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'details/:id',
        component: TodoDetailsComponent
      },
      {
        path: 'details',
        component: TodoDetailsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  declarations: [ TodoListComponent, TodoDetailsComponent ]
})
export class DashboardModule { }
