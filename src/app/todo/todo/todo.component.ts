import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITodo, TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  constructor() {

  }

  async ngOnInit() {
  }
  task: string = ''
  myTodo: ITodo | undefined
  currentRecord: ITodo | undefined
  addTodo() {
    if (this.task) {
      if (!this.currentRecord) {
        this.myTodo = {
          id: this.generateRandomString(5),
          title: this.task,
          completed: false,
        }
      } else {
        this.currentRecord = { ...this.currentRecord, title: this.task }
        this.myTodo = this.currentRecord
        this.currentRecord = undefined
      }

      this.task = ''
    }
  }

  generateRandomString(length: number = 10): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  TodoEdit(item: ITodo) {
    this.currentRecord = item
    this.task = item.title
  }
}