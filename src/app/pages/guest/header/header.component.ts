import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openFilterMenu(): void {
    // Implementa la lógica para abrir el menú de filtro aquí
    console.log('Abrir menú de filtro');
  }
}
