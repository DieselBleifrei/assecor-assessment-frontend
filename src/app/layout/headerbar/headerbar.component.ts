import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateCharacterDialogComponent } from 'src/app/dialogs/create-character-dialog/create-character-dialog.component';
import { CreateMovieDialogComponent } from 'src/app/dialogs/create-movie-dialog/create-movie-dialog.component';
import { CreatePlanetDialogComponent } from 'src/app/dialogs/create-planet-dialog/create-planet-dialog.component';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent {

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {

  }

  openCharacterCreationDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    const dialogRef = this.dialog.open(CreateCharacterDialogComponent, dialogConfig);
  }

  openPlanetCreationDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    const dialogRef = this.dialog.open(CreatePlanetDialogComponent, dialogConfig);
  }

  openMovieCreationDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    const dialogRef = this.dialog.open(CreateMovieDialogComponent, dialogConfig);
  }

}
