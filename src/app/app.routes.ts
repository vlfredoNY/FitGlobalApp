import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';

export const routes: Routes = [
  //  {
  //    path: '',
  //    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  //  },
  // {
  //   path: '',
  //   loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  // },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
];
