import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsMovieDialogComponent } from '../details-movie-dialog/details-movie-dialog.component';

@Component({
  selector: 'app-movies-web-filters',
  templateUrl: './movies-web-filters.component.html',
  styleUrls: ['./movies-web-filters.component.css']
})
export class MoviesWebFiltersComponent {
  constructor(public dialog: MatDialog) {}
  peliculas: any[] = [
    {
      titulo: 'Pelicula 1',
      genero: 'Acción',
      descripcion: 'Una película emocionante llena de acción.',
      imagen: 'url-de-imagen-1.jpg',
    },
    {
      titulo: 'Pelicula 2',
      genero: 'Comedia',
      descripcion: 'Una divertida comedia para toda la familia.',
      imagen: 'url-de-imagen-2.jpg',
    },
    {
      titulo: 'Pelicula 1',
      genero: 'Acción',
      descripcion: 'Una película emocionante llena de acción.',
      imagen: 'url-de-imagen-1.jpg',
    },
    {
      titulo: 'Pelicula 2',
      genero: 'Comedia',
      descripcion: 'Una divertida comedia para toda la familia.',
      imagen: 'url-de-imagen-2.jpg',
    },
    {
      titulo: 'Pelicula 1',
      genero: 'Acción',
      descripcion: 'Una película emocionante llena de acción.',
      imagen: 'url-de-imagen-1.jpg',
    },
    {
      titulo: 'Pelicula 2',
      genero: 'Comedia',
      descripcion: 'Una divertida comedia para toda la familia.',
      imagen: 'url-de-imagen-2.jpg',
    },
    {
      titulo: 'Pelicula 1',
      genero: 'Acción',
      descripcion: 'Una película emocionante llena de acción.',
      imagen: 'url-de-imagen-1.jpg',
    },
    {
      titulo: 'Pelicula 2',
      genero: 'Comedia',
      descripcion: 'Una divertida comedia para toda la familia.',
      imagen: 'url-de-imagen-2.jpg',
    },
    {
      titulo: 'Pelicula 1',
      genero: 'Acción',
      descripcion: 'Una película emocionante llena de acción.',
      imagen: 'url-de-imagen-1.jpg',
    },
    {
      titulo: 'Pelicula 2',
      genero: 'Comedia',
      descripcion: 'Una divertida comedia para toda la familia.',
      imagen: 'url-de-imagen-2.jpg',
    },
    {
      titulo: 'Pelicula 1',
      genero: 'Acción',
      descripcion: 'Una película emocionante llena de acción.',
      imagen: 'url-de-imagen-1.jpg',
    },
    {
      titulo: 'Pelicula 2',
      genero: 'Comedia',
      descripcion: 'Una divertida comedia para toda la familia.',
      imagen: 'url-de-imagen-2.jpg',
    },
    {
      titulo: 'Pelicula 1',
      genero: 'Acción',
      descripcion: 'Una película emocionante llena de acción.',
      imagen: 'url-de-imagen-1.jpg',
    },
    {
      titulo: 'Pelicula 2',
      genero: 'Comedia',
      descripcion: 'Una divertida comedia para toda la familia.',
      imagen: 'url-de-imagen-2.jpg',
    }
  ];


  openMovieDialog(pelicula: any): void {
    const dialogRef = this.dialog.open(DetailsMovieDialogComponent, {
      width: '50%',
      data: pelicula,
    });

    dialogRef.afterClosed().subscribe(result => {
      // Puedes realizar acciones después de que se cierre el diálogo
    });
  }
}
