import {Injectable} from '@angular/core';
import TodoModel from "./todo.model";
import {ApiService} from "../api/api.service";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class TodoService {

  _todos: TodoModel[] = [];
  loaded: boolean = false;
  private state: BehaviorSubject<TodoModel[]> = new BehaviorSubject([]);
  public stateUpdate: Observable<TodoModel[]> = this.state.asObservable();

  constructor(
    private api: ApiService
  ) { }

  get todos() {
    return [...this._todos];
  }

  set todos(todos: TodoModel[]) {
    this.state.next([...todos]);
    this._todos = todos;
  }

  get(filter: Object = {}) : Promise<TodoModel[]> {

    if (this.loaded) {
      this.todos = TodoService.sortTodos(this.todos);
      return Promise.resolve(this.todos);
    }

    return this.api.get('/api/todo', filter)
      .map(payload => {
        this._todos = payload.map(todo => (new TodoModel(todo)));
        this.loaded = true;
        return this._todos;
      }).toPromise();
  }

  static sortTodos(todos: TodoModel[]): TodoModel[] {
    return todos.sort((a: TodoModel, b: TodoModel) => {
      if (a.done !== b.done) {
        return a.done ? 1 : -1;
      }

      return a.createdAt < b.createdAt ? 1 : -1;
    })
  }

  add(data: Object): Promise<TodoModel> {
    return this.api.post('/api/todo', data)
      .map((response) => {
        const model = new TodoModel(response);
        this._todos.push(model);

        return model;
      }).toPromise();
  }

  check(todo: TodoModel): Promise<TodoModel> {
    return this.api.patch(`/api/todo/${todo.id}/toggle`, todo)
      .map((response) => {
        const model = new TodoModel(response);
        Object.assign(todo, model);

        this.todos = TodoService.sortTodos(this.todos);
        return model;
      }).toPromise();
  }

}
