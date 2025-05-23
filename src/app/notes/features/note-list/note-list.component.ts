import { AfterViewInit, Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/data-access/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NotesService } from '../../data-access/notes.service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './note-list.component.html',
})
export  class NoteListComponent implements AfterViewInit{

  private _authService = inject(AuthService);

  private _router = inject(Router);

  notesService = inject(NotesService);

  async logOut() {
    await this._authService.signOut();
    this._router.navigateByUrl('/auth/log-in');
  }
  
  ngAfterViewInit() {
    this.notesService.getAllNotes();
  }

  toggleSidebar(): void {
    const sidebar = document.querySelector('#sidebar');
    sidebar?.classList.toggle('collapsed');
  }
}
