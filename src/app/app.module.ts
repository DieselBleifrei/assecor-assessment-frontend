import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderbarComponent } from './layout/headerbar/headerbar.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CreatePlanetDialogComponent } from './dialogs/create-planet-dialog/create-planet-dialog.component';
import { CreateCharacterDialogComponent } from './dialogs/create-character-dialog/create-character-dialog.component';
import { CreateMovieDialogComponent } from './dialogs/create-movie-dialog/create-movie-dialog.component';
import { CharacterInformationComponent } from './pages/character-information/character-information.component';
import { MovieInformationComponent } from './pages/movie-information/movie-information.component';
import { PlanetInformationComponent } from './pages/planet-information/planet-information.component'
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    WrapperComponent,
    HomePageComponent,
    MoviesComponent,
    CharactersComponent,
    PlanetsComponent,
    CreatePlanetDialogComponent,
    CreateCharacterDialogComponent,
    CreateMovieDialogComponent,
    CharacterInformationComponent,
    MovieInformationComponent,
    PlanetInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
