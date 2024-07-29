import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../todo.service";

@Component({
  selector: 'digi-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleCompletion = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onToggleCompletion() {
    this.toggleCompletion.emit(this.todo.id);
  }

  onRemove() {
    this.remove.emit(this.todo.id);
  }
}
