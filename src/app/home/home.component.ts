import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StringpipePipe } from '../Pipes/stringpipe.pipe';
import { JsonFormatPipe } from '../Pipes/json-format.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, TitleCasePipe, CurrencyPipe, JsonFormatPipe, StringpipePipe],
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
  public students = [{ Id: 1, Name: 'Rizwan' },{ Id: 2, Name: 'Ayan' }]
  public showHide() {
    this.showDiv = !this.showDiv
  }

  public controlFlows() {
    this.controlFlow = !this.controlFlow
  }
}
