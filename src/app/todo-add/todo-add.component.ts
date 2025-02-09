import { Component } from '@angular/core';
import {TodoService} from "../todo.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'digi-todo-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {

  newTodoTitle: string = '';
  newTodoPriority: 'low' | 'medium' | 'high' = 'medium';

  constructor(private todoService: TodoService) { }

  onAddTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle, this.newTodoPriority);
      this.newTodoTitle = '';
      this.newTodoPriority = 'medium'; // Réinitialiser la priorité après ajout
    }
  }
}
