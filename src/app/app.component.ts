import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, NgForOf, NgIf],
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist-angular';
}

