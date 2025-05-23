import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})


export class DetailsComponent implements AfterViewInit {
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
