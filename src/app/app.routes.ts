import { Routes } from '@angular/router';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo/todo.component').then(x => x.TodoComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(o => o.ContactComponent),
    children: [
      {
        path: 'list',
        component: ContactListComponent
      }
    ]
  },
  {
    path: 'product-list',
    loadComponent: () => import('./products/product/product.component').then(i => i.ProductComponent)
  },
  {
    path: 'template-form',
    loadComponent: () => import('./template-from/template-from.component').then(i => i.TemplateFromComponent)
  },
  {
    path: 'reactive-form',
    loadComponent: () => import('./reactive-form/reactive-form.component').then(i => i.ReactiveFormComponent)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
