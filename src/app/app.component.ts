import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent],
  template: '<digi-todo-list></digi-todo-list>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todolist-angular';
}
