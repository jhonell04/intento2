import { Routes } from '@angular/router';

export const AdminRouting: Routes = [
  {
    path: 'app-receipts',
    loadComponent: () => import('../receipts/receipts.component').then(m => m.ReceiptsComponent),
  },
  {
    path: 'details',
    loadComponent: () => import('../details/details.component').then(m => m.DetailsComponent),
  },
  {
    path: '',
    loadComponent: () => import('../admin/admin.component').then(m => m.AdminComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];