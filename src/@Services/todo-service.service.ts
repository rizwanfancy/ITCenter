import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  baseUrl = 'https://localhost:7164/api'
  controller = 'Todo'

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(`${this.getUrl()}`);
  }

  putTodo(id:any, todoItem: any) {
   return this.http.put(`${this.getUrl()}/${id}`, todoItem)
  }

  postTodo(todoItem: any) {
    return this.http.post(`${this.getUrl()}`, todoItem)
  }


  deleteTodo(id: any) {
   return this.http.delete(`${this.baseUrl}/${this.controller}/${id}`)
  }

  private getUrl() {
    return `${this.baseUrl}/${this.controller}`
  }

}
