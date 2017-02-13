import { Injectable } from '@angular/core';
import TodoModel from "./todo.model";
import {ApiService} from "../api/api.service";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import * as Promise from "../../../../../../../../Library/Preferences/WebStorm2016.3/javascript/extLibs/http_github.com_DefinitelyTyped_DefinitelyTyped_raw_master_promise_index";

@Injectable()
export class TodoService {

  todos: TodoModel[] = [];

  constructor(
    private api: ApiService
  ) { }

  add(data): Promise<TodoModel> {
    return this.api.post('api/todo', data)
      .map((response) => {
        const model = new TodoModel(response);
        this.todos.push(model);

        return model;
      }).toPromise();
  }

  check(todo: TodoModel): Promise<TodoModel> {
    return this.api.post(`api/todo/${todo.id}`, todo)
      .map((response) => {
        const model = new TodoModel(response);
        Object.assign(todo, model);
        this.todos.push(todo);

        return model;
      }).toPromise();
  }

}
