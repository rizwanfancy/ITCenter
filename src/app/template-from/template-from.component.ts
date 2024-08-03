import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonFormatPipe } from '../Pipes/json-format.pipe';

@Component({
  selector: 'app-template-from',
  standalone: true,
  imports: [FormsModule, JsonFormatPipe],
  templateUrl: './template-from.component.html',
  styleUrl: './template-from.component.scss'
})
export class TemplateFromComponent {

  list: any

  contactInfoObj = {
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',

  }

  public onSubmit() {
    console.log(this.contactInfoObj)
  }
}
