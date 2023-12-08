import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-details-movie-dialog',
  templateUrl: './details-movie-dialog.component.html',
  styleUrls: ['./details-movie-dialog.component.css']
})
export class DetailsMovieDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DetailsMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
  selectedCine: string = ''; // Variable para almacenar el cine seleccionado
  selectedSalaHorario: string = ''; // Variable para almacenar la sala y horario seleccionados

  cines: string[] = ['Cine 1', 'Cine 2', 'Cine 3']; // Ejemplo de lista de cines
  salasHorarios: string[] = ['Sala 1 - 10:00 AM', 'Sala 2 - 12:00 PM', 'Sala 3 - 3:00 PM']; // Ejemplo de lista de salas y horarios
}
