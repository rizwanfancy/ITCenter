import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoServiceService {

  baseUrl = 'https://localhost:4500/'
  controller = ''

  constructor(private http: HttpClient) { }

  getTodos() {
    this.http.get(`${this.baseUrl}/todos`).subscribe(x => {
      return x
    })
  }

  putTodo(todoItem: any) {
    this.http.put(`${this.baseUrl}`, todoItem)
  }

  postTodo(todoItem: any) {
    this.http.post(`${this.baseUrl}`, todoItem)
  }


  deleteTodo(id: any) {
    this.http.delete(`${this.baseUrl}/${this.controller}/delete/${id}`)
  }

}
