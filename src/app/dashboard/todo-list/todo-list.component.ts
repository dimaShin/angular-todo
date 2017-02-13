import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../shared/services/todo/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoService.get();
  }

  onToggleTodo(todo): void {
    this.todoService.check(todo);
  }

  onAddClicked() {
    this.router.navigateByUrl('details/');
  }

}
