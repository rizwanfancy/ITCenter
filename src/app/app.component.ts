import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TodoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  Id: number = 1
  inputType: string = 'text'
  ContactInfo = 123456789
  caption = 'Godhra IT Center'
  Location: string = 'Near Godhra Muslim Medical Center'
  // string,number,boolean,date,
  City: string = "Karachi"
  items: any[] = ['RIzwan', 'Anwer', 'Hussain']
  constructor() {

  }

  changeInputType() {
    this.items.push('Godhra')
    alert(this.caption + '\n' + 'Location: \n' + this.Location + '\n' + 'City:' + this.City)
  }
}
