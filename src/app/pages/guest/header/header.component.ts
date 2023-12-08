import { Component } from '@angular/core';
import { FilterToggleSidebarService } from 'src/app/services/filter-toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public filterMenuService: FilterToggleSidebarService) {}
  imagePath: string = 'assets/logo_white_completed.png'

  openFilterMenu(): void {
    this.filterMenuService.toggleMenu();
  }
}
