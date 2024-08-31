import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../../@interface/ITodo';
import { TodoServiceService } from '../../../@Services/todo-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule, CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

  @ViewChild('taskInput') taskInput!: any;

  newTask: string = '';
  public allTodos: Todo[] = []
  private currentTask: Todo = {} as any;
  constructor(private service: TodoServiceService) {

  }

  ngOnInit() {
    this.getAllTodo();
  }

  getAllTodo() {
    this.service.getTodos().subscribe(x => {
      if (x) {
        this.allTodos = x.data as Todo[]
      }
    })
  }

  addTask() {
    if (!this.currentTask) {
      this.service.postTodo({
        "title": this.newTask.trim(),
        "description": this.newTask.trim(),
        "dueDate": new Date().toISOString(),
        "priority": 1
      }).subscribe(X => {
        alert('your record add successfully')
        this.getAllTodo()
      })
    }
    else {
      this.service.putTodo(this.currentTask.id, {
        "title": this.newTask.trim(),
        "description": this.newTask.trim(),
        "dueDate": new Date().toISOString(),
        "priority": 1
      }).subscribe(X => {
        alert('your record has been edited successfully')
        this.getAllTodo()
      })

    }
  }

  removeTask(index: any) {
    this.service.deleteTodo(index).subscribe(x => x)
    alert('Record Deleted')
    this.getAllTodo()
  }
  editTask(task: Todo) {
    if (task.id) {
      this.newTask = task.title;
      this.currentTask = task;
    }
  }
}
