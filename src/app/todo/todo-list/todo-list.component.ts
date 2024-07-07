import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Output() EditRecord = new EventEmitter<ITodo>
  noRecords: string = 'No Record found...'
  todos: Array<ITodo> = []

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todoItem'].currentValue) {
      let value = changes['todoItem'].currentValue
      if (this.todos.filter(o => o.id === value.id).length === 0) {
        this.todos.push(value)
      } else {
        this.todos.filter(o => o.id === value.id)[0].title = value.title
      }
    }
  }

  Edit(item: ITodo) {
    this.EditRecord.emit(item)
  }

}

export interface ITodo {
  id: string,
  title: string,
  completed: boolean
}
