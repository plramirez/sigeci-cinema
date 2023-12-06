import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-delete-movie-dialog',
  templateUrl: './confirm-delete-movie-dialog.component.html',
  styleUrls: ['./confirm-delete-movie-dialog.component.css']
})
export class ConfirmDeleteMovieDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
