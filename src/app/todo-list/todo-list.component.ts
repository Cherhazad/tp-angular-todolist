import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Todo, TodoService} from "../todo.service";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {TodoAddComponent} from "../todo-add/todo-add.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'digi-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoAddComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getTodos();
  };

  onToggleTodoCompletion(id: number) {
    this.todoService.toggleTodoCompletion(id);
  }

  onRemoveTodo(id: number) {
    this.todoService.removeTodo(id);
  }

}
