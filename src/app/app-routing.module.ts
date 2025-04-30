import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'characters', component: CharactersComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
