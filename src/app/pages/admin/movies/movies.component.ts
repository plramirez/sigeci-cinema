import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
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

  // Métodos para acciones de botones
  verPelicula(movie: any): void {
    // Lógica para ver la película
    console.log(`Ver película: ${movie.title}`);
  }

  editarPelicula(movie: any): void {
    // Lógica para editar la película
    console.log(`Editar película: ${movie.title}`);
  }

  eliminarPelicula(movie: any): void {
    // Lógica para eliminar la película
    console.log(`Eliminar película: ${movie.title}`);
  }
}
