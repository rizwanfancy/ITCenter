import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo/todo.component'; 
=======
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
>>>>>>> be9525bc631699d591d4e26315e8a6b4898ef6af

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, FormsModule, CommonModule, TodoComponent],
=======
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, TodoComponent, CommonModule],
>>>>>>> be9525bc631699d591d4e26315e8a6b4898ef6af
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
<<<<<<< HEAD
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
=======

>>>>>>> be9525bc631699d591d4e26315e8a6b4898ef6af
}
