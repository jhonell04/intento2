
import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule], // Añade RouterModule
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
logOut() {
throw new Error('Method not implemented.');
}
  isCollapsed = false;

  toggleSidebar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar?.classList.toggle('collapsed');
  }
 
}
