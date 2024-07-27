import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public dayName = '0'
  public showDiv: boolean = true
  public controlFlow: boolean = true
  public students = [
    'Abc',
    'Xyz',
    '123',
    '456',
    '789'
  ]
  public showHide() {
    this.showDiv = !this.showDiv
  }

  public controlFlows() {
    this.controlFlow = !this.controlFlow
  }
}
