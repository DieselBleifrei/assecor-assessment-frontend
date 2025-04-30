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

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    WrapperComponent,
    HomePageComponent,
    MoviesComponent,
    CharactersComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
