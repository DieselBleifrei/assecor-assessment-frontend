import { Component } from '@angular/core';
import { RequestService } from './services/request.service';
import { SwapiData } from './models/swapiData';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assecor-assessment-frontend';

  constructor(private requestService: RequestService,
    private dataSharingService: DataSharingService
  ) {

  }

  ngOnInit() {
    this.requestService.getSwapi().subscribe((data: SwapiData) => {
      this.dataSharingService.setStarWarsAPIs(data.result);
    })
  }
}
