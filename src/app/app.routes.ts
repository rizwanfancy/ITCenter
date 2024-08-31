import { Routes } from '@angular/router';
import { RouteGuardService } from '../@core/route-guard.service';
import { LoginComponent } from '../@forms/auth/login/login.component';
import { DashboardComponent } from '../@forms/Modules/dashboard.component';
import { TodoComponent } from '../@forms/Modules/todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    // loadComponent: () => import('../@forms/auth/login/login.component').then(x => x.LoginComponent)
    component: LoginComponent
  },
  {
    path: 'home',
    // loadComponent: () => import('../@forms/Modules/dashboard.component').then(X => X.DashboardComponent),
    component: DashboardComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];
