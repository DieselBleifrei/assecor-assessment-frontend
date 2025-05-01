import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { SwapiPlanet } from 'src/app/models/swapiPlanet';
import { SwapiPlanetResult } from 'src/app/models/swapiPlanetResult';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-planet-information',
  templateUrl: './planet-information.component.html',
  styleUrls: ['./planet-information.component.scss']
})
export class PlanetInformationComponent {
  
  planet: SwapiPlanet;

  constructor(private http: HttpClient,
    private dataSharingService: DataSharingService,
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    let combined = combineLatest(this.route.params, this.dataSharingService.getStarWarsAPIs())
    combined.subscribe(([params, swapiData]) => {
      if (params && params['id'] && swapiData) {
        this.http.get<SwapiPlanetResult>(swapiData.planets + '/' + params['id'] + '?expanded=true').subscribe((planet: SwapiPlanetResult) => {
          this.planet = planet.result;
        })
      }
    })
  }
}
