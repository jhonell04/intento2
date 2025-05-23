import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-receipts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './receipts.component.html',
  styleUrl: './receipts.component.css'
})

export class ReceiptsComponent  implements AfterViewInit {
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
