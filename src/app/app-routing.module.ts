import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterInformationComponent } from './pages/character-information/character-information.component';
import { MovieInformationComponent } from './pages/movie-information/movie-information.component';
import { PlanetInformationComponent } from './pages/planet-information/planet-information.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterInformationComponent },
  { path: 'movies/:id', component: MovieInformationComponent },
  { path: 'planets/:id', component: PlanetInformationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
