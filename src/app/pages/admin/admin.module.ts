import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormMovieDialogComponent } from './movies/form-movie-dialog/form-movie-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormCinemaDialogComponent } from './cinemas/form-cinema-dialog/form-cinema-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MoviesComponent,
    CinemasComponent,
    RoomsComponent,
    AssignmentComponent,
    FormMovieDialogComponent,
    FormCinemaDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SelectDropDownModule,
    SharedModule
  ]
})
export class AdminModule { }
