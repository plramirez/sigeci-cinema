import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MoviesComponent } from './movies/movies.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AssignmentComponent } from './assignment/assignment.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    TopBarComponent,
    MoviesComponent,
    CinemasComponent,
    RoomsComponent,
    AssignmentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
