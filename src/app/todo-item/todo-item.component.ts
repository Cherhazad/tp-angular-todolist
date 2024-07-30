import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../todo.service";
import {CommonModule, NgClass} from "@angular/common";
import {PriorityPipe} from "../priority.pipe";

@Component({
  selector: 'digi-todo-item',
  standalone: true,
  imports: [CommonModule, PriorityPipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleCompletion = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onToggleCompletion(toggleBtn : HTMLButtonElement) {
    this.toggleCompletion.emit(this.todo.id);
    toggleBtn.textContent = this.todo.completed ? 'Invalider' : 'Valider';
    console.log("bouton valider cliqué")
  }

  onRemove() {
    this.remove.emit(this.todo.id);
  }
}
