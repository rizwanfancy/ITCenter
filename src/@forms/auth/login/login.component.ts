import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    console.log(`this is ngOnInit`)
  }

  ngAfterViewInit(): void {
    console.log(`this is ngAfterViewInit`)
  }

  ngOnDestroy(): void {
    console.log(`this is ngOnDestroy`)
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public Login() {
    this.router.navigateByUrl('/home')
  }
}
