import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnChanges, OnInit {

  @Input() todoItem: ITodo | undefined
  @Output() EditRecord = new EventEmitter<ITodo>
  noRecords: string = 'No Record found...'
  todos: Array<ITodo> = []

  constructor(private client: HttpClient) {

  }
  ngOnInit(): void {
    this.client.get('https://jsonplaceholder.typicode.com/posts').subscribe(x => {
      this.todos = x as any
    })
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['todoItem'].currentValue) {
      let value: ITodo = changes['todoItem'].currentValue
      if (this.todos.filter(o => o.id === value.id).length === 0) {
        this.todos.push(value);
        this.client.post('https://jsonplaceholder.typicode.com/todos', value).subscribe(
          res => {console.log(res);},
        );
      } else {
        this.client.put(`https://jsonplaceholder.typicode.com/todos/${value.id}`, value).subscribe(
          res => {
            console.log(res);
          })
        this.todos.filter(o => o.id === value.id)[0].title = value.title
<<<<<<< HEAD
        this.todos.filter(o => o.id === value.id)[0].completed = value.completed
=======
        let todo = this.todos.filter(o => o.id === value.id)[0] as any
        todo.body = todo.title
        let str = JSON.stringify(todo)
        this.client.put(`https://jsonplaceholder.typicode.com/posts/${value.id}`, str, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).subscribe(x => {
          alert('Record updated...')
        })
>>>>>>> be9525bc631699d591d4e26315e8a6b4898ef6af
      }
    }
  }

  Edit(item: ITodo) {
    this.EditRecord.emit(item)
  }

}

export interface ITodo {
  id: string | number,
  title: string,
  completed: boolean
}