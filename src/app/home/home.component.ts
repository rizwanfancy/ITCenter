import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, TitleCasePipe, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public value = 0
  public caption: string = "this is my caption"
  public currentDate: Date = new Date()
  public title: string = ''
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
