import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  str:string='';
  todo_Items:string[]=["Atif","Arif"];
  Add(){
    this.todo_Items.push(this.str);
  }
  Remove(){
    this.todo_Items.pop();
  }
}
