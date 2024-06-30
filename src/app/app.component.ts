import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo/todo.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-app';
  x: number = 3;
  y: number = 5;
  constructor() {}
  add(a: number, b: number): number {
    return a + b;
  }
  //property data binding
  id_no: number = 1;
  inputType: string = 'text';
  showValue: string = 'Hide Password';
  changeInputType() {
    if (this.inputType === 'text') {
      this.inputType = 'password';
      this.showValue = 'Show Password';
    } else {
      this.inputType = 'text';
      this.showValue = 'Hide Password';
    }
  }

  City: string = 'Karachi';

  Text: string = 'Empty';
}
