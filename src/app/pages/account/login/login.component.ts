import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  imagePath: string = 'assets/logo_blue.png'
  onIngresarClick() {
    // Lógica de autenticación y otras operaciones si es necesario

    // Navegar al dashboard
    this.router.navigate(['/admin/dashboard']);
  }

}
