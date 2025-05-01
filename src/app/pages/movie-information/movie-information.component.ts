import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { SwapiMovie } from 'src/app/models/swapiMovie';
import { SwapiMovieResult } from 'src/app/models/swapiMovieResult';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.scss']
})
export class MovieInformationComponent {

  movie: SwapiMovie;

  constructor(private http: HttpClient,
    private dataSharingService: DataSharingService,
    private route: ActivatedRoute) {
  }


    ngOnInit() {
      let combined = combineLatest(this.route.params, this.dataSharingService.getStarWarsAPIs())
      combined.subscribe(([params, swapiData]) => {
        if (params && params['id'] && swapiData) {
          this.http.get<SwapiMovieResult>(swapiData.films + '/' + params['id'] + '?expanded=true').subscribe((movie: SwapiMovieResult) => {
            this.movie = movie.result;
          })
        }
      })
    }

  }
