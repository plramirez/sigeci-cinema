import { Component,Input  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-movie-dialog',
  templateUrl: './form-movie-dialog.component.html',
  styleUrls: ['./form-movie-dialog.component.css']
})
export class FormMovieDialogComponent {
  @Input() readonly: boolean = false;
  movie: any = {genres: ['Acción', 'Comedia', 'Drama', 'Aventura', 'Ciencia ficción'],
  coverImage: ''
}

  constructor(public dialogRef: MatDialogRef<FormMovieDialogComponent>) {}
  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Realiza acciones necesarias con el archivo (puedes subirlo a un servidor o procesarlo localmente)
      // En este ejemplo, solo se obtiene la URL local del archivo
      this.movie.coverImage = URL.createObjectURL(file);
    }
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    // Aquí puedes realizar acciones para guardar la película
    this.dialogRef.close();
  }
}
