import { Component } from '@angular/core';
import { FilterToggleSidebarService } from 'src/app/services/filter-toggle-sidebar.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public filterMenuService: FilterToggleSidebarService, private movieService: MovieService) {}
  imagePath: string = 'assets/logo_white_completed.png'

  openFilterMenu(): void {
    this.filterMenuService.toggleMenu();
  }

  showMovies(type: string): void {
    // Lógica para filtrar la lista según el tipo de película
  }
}
