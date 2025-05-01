import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { SwapiCharacter } from 'src/app/models/swapiCharacter';
import { SwapiCharacterResult } from 'src/app/models/swapiCharacterResult';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.scss']
})
export class CharacterInformationComponent {

  character: SwapiCharacter;

  constructor(private http: HttpClient,
    private dataSharingService: DataSharingService,
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    let combined = combineLatest(this.route.params, this.dataSharingService.getStarWarsAPIs())
    combined.subscribe(([params, swapiData]) => {
      if (params && params['id'] && swapiData) {
        this.http.get<SwapiCharacterResult>(swapiData.people + '/' + params['id'] + '?expanded=true').subscribe((character: SwapiCharacterResult) => {
          this.character = character.result;
        })
      }
    })
  }
}