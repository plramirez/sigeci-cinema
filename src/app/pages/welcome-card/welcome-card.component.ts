import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent {
  imagePath: string = 'assets/logo_blue.png'

  constructor(private router: Router) {}
  isCustomerButtonOutline: boolean = true; // Inicializar como true para que el botón del cliente sea outline

  goCustomerModule(): void {
    // Redirige la ventana actual a la nueva página
    window.location.href = 'http://localhost/wordpress/';
  }

  goAdminModule() {
    this.router.navigate(['/account/login']);
  }
}
