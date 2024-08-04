import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IUser {
  email: string,
  password: string,
  country: string,
  city: string
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public list:IUser[]= []

  contactInfoObj:IUser = {
    email: '',
    password: '',
    country: '',
    city: '',
  }
  email:string=''
  password:string= ''
  country:string= ''
  city: string=''


  public onSubmit() {
    console.log(this.contactInfoObj)
  }
  public createUser(){
    return {
      email: '',
      password: '',
      country: '',
      city: '',
    }
  }
  public confirm(){
    this.list.push({...this.contactInfoObj});
    this.contactInfoObj.email=""
    this.contactInfoObj.password=""
    this.contactInfoObj.country=""
    this.contactInfoObj.city=""

  }
}

