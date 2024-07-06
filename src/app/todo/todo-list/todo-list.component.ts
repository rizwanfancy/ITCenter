import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnChanges {

  @Input() todoItem: ITodo | undefined
  noRecords: string = 'No Record found...'
  todos: Array<ITodo> = []

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todoItem'].currentValue) {
      this.todos.push(changes['todoItem'].currentValue)
    }
  }

}

export interface ITodo {
  id: string,
  title: string,
  completed: boolean
}
