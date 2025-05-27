import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },{
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((l) => l.LoginComponent),
    },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
