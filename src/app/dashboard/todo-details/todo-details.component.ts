import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../shared/services/todo/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-details',
  templateUrl: 'todo-details.component.html',
  styleUrls: ['todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  title: string = '';
  description: string = '';

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const { title, description } = this;
    this.todoService.add({ title, description })
      .then(() => this.router.navigate(['']));
  }

}
