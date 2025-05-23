import { Routes } from '@angular/router';


export const NoteRouting: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../note-list/note-list.component').then(m => m.NoteListComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
