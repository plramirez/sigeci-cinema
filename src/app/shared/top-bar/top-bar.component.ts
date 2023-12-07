import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/account/login']);
  }

}
