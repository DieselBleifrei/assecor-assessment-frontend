import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwapiPlanet } from 'src/app/models/swapiPlanet';
import { SwapiPlanetPage } from 'src/app/models/swapiPlanetPage';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {

    planets: SwapiPlanet[];
  
    constructor(private http: HttpClient,
      private dataSharingService: DataSharingService
    ) {
  
    }
  
    ngOnInit() {
      this.dataSharingService.getStarWarsAPIs().subscribe(data => {
        if (data) {
          this.http.get<SwapiPlanetPage>(data.planets + '?expanded=true').subscribe((planets: SwapiPlanetPage) => {
            this.planets = planets.results;
          })
        }
      })
    }

}
