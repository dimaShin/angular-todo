import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../shared/services/todo/todo.service";
import {Router} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";

import 'rxjs/add/operator/debounceTime';
import TodoModel from "../../shared/services/todo/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public filterForm: FormGroup = new FormGroup({
    search: new FormControl(),
    status: new FormControl('pending')
  });

  public todos: TodoModel[] = [];

  constructor(
    public todoService: TodoService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.todoService.get().then(todos => this.todos = this.getFilteredTodos(todos, this.filterForm.value));
    this.todoService.stateUpdate.subscribe(todos => this.todos = this.getFilteredTodos(todos, this.filterForm.value));

    this.filterForm.valueChanges.debounceTime(150).subscribe(() => this.onFilterChange(this.filterForm.value));
  }

  onFilterChange(filter: { search: string, status: 'pending' | 'all' }) {
    this.todos = this.getFilteredTodos(this.todoService.todos, filter);
  }

  getFilteredTodos(todos, { search, status }) : TodoModel[] {
    return todos.filter(todo => {
      if (status === 'pending' && todo.done) {
        return false;
      }

      if (!search) {
        return true;
      }

      return todo.title.toLocaleLowerCase().includes(search.toLowerCase());
    })
  }

  onToggleTodo(todo): void {
    this.todoService.check(todo);
  }

  onAddClicked() {
    this.router.navigateByUrl('details/');
  }

  setStatusFilter(status: 'all' | 'pending') {
    this.filterForm.controls['status'].setValue(status);
  }

}
