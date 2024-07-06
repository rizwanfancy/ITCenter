import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
