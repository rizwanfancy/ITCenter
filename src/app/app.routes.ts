import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: 'list',
        component: ContactListComponent
      }
    ]

  },
  {
    path: 'product-list',
    component: ProductListComponent
  }
];
