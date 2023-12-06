import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MoviesComponent } from './movies/movies.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormMovieDialogComponent } from './movies/form-movie-dialog/form-movie-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeleteMovieDialogComponent } from './movies/confirm-delete-movie-dialog/confirm-delete-movie-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    TopBarComponent,
    MoviesComponent,
    CinemasComponent,
    RoomsComponent,
    AssignmentComponent,
    FormMovieDialogComponent,
    ConfirmDeleteMovieDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
