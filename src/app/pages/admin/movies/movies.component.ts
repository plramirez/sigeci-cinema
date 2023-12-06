import { Component } from '@angular/core';
import {
  MatDialog} from '@angular/material/dialog';
import { FormMovieDialogComponent } from './form-movie-dialog/form-movie-dialog.component';
import { ConfirmDeleteMovieDialogComponent } from './confirm-delete-movie-dialog/confirm-delete-movie-dialog.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  constructor(public dialog: MatDialog) {}

   movies: any[] = [ {
    title: 'La película',
    genre: 'Acción',
    rating: 'PG-13',
    synopsis: 'Una emocionante película de acción.',
    director: 'Director Ejemplo',
    stars: 'Actor1, Actor2',
    releaseDate: '2023-01-01',
    addedDate: '2023-12-01',
    coverImage: 'url-de-la-imagen.jpg',
  }, {
    title: 'La película 2',
    genre: 'Comedia',
    rating: 'PG',
    synopsis: 'Una divertida comedia para toda la familia.',
    director: 'Director Ejemplo 2',
    stars: 'Actriz1, Actor3',
    releaseDate: '2023-02-15',
    addedDate: '2023-12-02',
    coverImage: 'url-de-la-imagen-2.jpg',
  }]; // Supongamos que movies es un array de películas



  openAddMovieDialog(): void {
    const dialogRef = this.dialog.open(FormMovieDialogComponent, {
      width: '60%', // Ajusta el ancho según tus necesidades
      disableClose: true, // Evita que el diálogo se cierre al hacer clic fuera de él
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró', result);
      // Puedes realizar acciones después de que se cierre el diálogo
    });
  }
  // Métodos para acciones de botones
  verPelicula(movie: any): void {
    const dialogRef = this.dialog.open(FormMovieDialogComponent, {
      width: '60%',
      data: { movie, readonly: true } // Pasa la película y el modo de vista
    });
    console.log(`Ver película: ${movie.title}`);
  }

  editarPelicula(movie: any): void {
    const dialogRef = this.dialog.open(FormMovieDialogComponent, {
      width: '60%',
      data: { movie, readonly: false } // Pasa la película y el modo de edición
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar acciones después de cerrar el diálogo de edición
    });
    console.log(`Editar película: ${movie.title}`);
  }

  eliminarPelicula(movie: any): void {
    const dialogRef = this.dialog.open(ConfirmDeleteMovieDialogComponent, {
      width: '300px',
      data: { title: 'Confirmar', message: '¿Estás seguro de que deseas eliminar esta película?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes realizar la lógica para eliminar la película de la lista
        // this.moviesService.eliminarPelicula(movie.id);
      }
    });
    console.log(`Eliminar película: ${movie.title}`);
  }


}
