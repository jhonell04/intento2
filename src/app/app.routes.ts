import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './auth/data-access/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [publicGuard],
    loadChildren: () => import('./auth/features/auth-shell/auth-routing').then(m => m.AuthRouting),
  },
  {
    path: 'admin',
    canActivate: [privateGuard],
    loadChildren: () => import('./componentsAdmin/features/admin-shell/admin-routing').then(m => m.AdminRouting),
  },
  {
    path: '',
    canActivate: [privateGuard],
    loadChildren: () => import('./notes/features/note-shell/note-routing').then(m => m.NoteRouting),
  },
  {
    path: '**',
    redirectTo: 'admin', // Redirige a admin por defecto
  },
];
