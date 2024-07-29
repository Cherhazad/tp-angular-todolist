import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  constructor() { }

  getTodos() {
    return this.todosSubject.asObservable();
  }

  addTodo(title: string) {
    const newTodo = {
      id: this.todos.length + 1,
      title,
      completed: false
    };
    this.todos = [...this.todos, newTodo];
    this.todosSubject.next(this.todos);
  }

  toggleTodoCompletion(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo);
    this.todosSubject.next(this.todos);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next(this.todos);
  }

}
