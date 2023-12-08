import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { MoviesWebFiltersComponent } from './movies-web-filters/movies-web-filters.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterToggleSidebarComponent } from 'src/app/pages/guest/filter-toggle-sidebar/filter-toggle-sidebar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { DetailsMovieDialogComponent } from './details-movie-dialog/details-movie-dialog.component';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MoviesWebFiltersComponent,
    HeaderComponent,
    FooterComponent,
    FilterToggleSidebarComponent,
    MovieCardComponent,
    DetailsMovieDialogComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    MatDialogModule,
    MatIconModule,
    FormsModule
  ]
})
export class GuestModule { }
