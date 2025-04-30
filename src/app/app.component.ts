import { Component } from '@angular/core';
import { RequestService } from './services/request.service';
import { StarWarsUniverseAPIs } from './models/swapiStarWarsUniverseAPIs';
import { SwapiData } from './models/swapiData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assecor-assessment-frontend';

  private starWarsApis: StarWarsUniverseAPIs;

  constructor(private requestService: RequestService) {

  }

  ngOnInit() {
    this.requestService.getSwapi().subscribe((data: SwapiData) => {
      this.starWarsApis = data.result;
    })
  }
}
