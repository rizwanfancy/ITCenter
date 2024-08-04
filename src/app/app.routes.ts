import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../@forms/auth/login/login.component').then(x => x.LoginComponent)
  },
  {
    path: 'main',
    loadComponent: () => import('../@forms/main/main.component').then(i => i.MainComponent)
  }
];
