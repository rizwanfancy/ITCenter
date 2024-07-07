import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private client: HttpClient) {


  }

  public async GetTodos() {
    return await this.client.get('https://jsonplaceholder.typicode.com/todos')
  }
}
