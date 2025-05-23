import { Routes } from '@angular/router';

export const AuthRouting: Routes = [
  {
    path: 'log-in',
    loadComponent: () =>
      import('../auth-log-in/auth-log-in.component').then(m => m.AuthLogInComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('../auth-sign-up/auth-sign-up.component').then(m => m.AuthSignUpComponent),
  },
  {
    path: '**',
    redirectTo: 'log-in',
  },
];
