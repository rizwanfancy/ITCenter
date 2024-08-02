import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITodo, TodoListComponent } from '../todo-list/todo-list.component';
import { TodoServiceService } from '../../@Services/todo-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  constructor(private client: HttpClient) { }

  async ngOnInit() {
  }
  id: any
  comp: boolean = false
  task: string = ''
  myTodo: ITodo | undefined
  currentRecord: ITodo | undefined

  addTodo() {
    if (this.task) {
      if (!this.currentRecord) {
        this.myTodo = {
          id: this.generateRandomString(5),
          title: this.task,
          completed: this.comp
        }
      } else {

        // this.myTodo = {
        //   id: this.id,
        //   title: this.task,
        //   completed: this.comp
        // }
        // this.client.put(`https://jsonplaceholder.typicode.com/todos/${this.id}`, this.myTodo).
        //   subscribe(res => {
        //     console.warn(res)
        //   })

        this.currentRecord = { ...this.currentRecord, title: this.task, completed: this.comp }
        this.myTodo = this.currentRecord
        this.currentRecord = undefined
      }

      this.id = undefined
      this.task = ''
      this.comp = false
    }
  }

  generateRandomString(length: number = 10): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result: any = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    // let result:any = this.myTodo?.id.lastIndexOf.toString();
    return result;
  }

  TodoEdit(item: ITodo) {
    this.id = item.id
    this.task = item.title
    this.comp = item.completed
    this.currentRecord = item
  }
}