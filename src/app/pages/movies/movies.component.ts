import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwapiMovie } from 'src/app/models/swapiMovie';
import { SwapiMoviesPage } from 'src/app/models/swapiMoviesPage';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movies: SwapiMovie[];

  constructor(private http: HttpClient,
    private dataSharingService: DataSharingService
  ) {

  }

  ngOnInit() {
    this.dataSharingService.getStarWarsAPIs().subscribe(data => {
      if (data) {
        this.http.get<SwapiMoviesPage>(data.films + '?expanded=true').subscribe((movies: SwapiMoviesPage) => {
          this.movies = movies.result;
        })
      }
    })
  }

}
