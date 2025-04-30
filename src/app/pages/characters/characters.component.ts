import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwapiCharacter } from 'src/app/models/swapiCharacter';
import { SwapiCharacterPage } from 'src/app/models/swapiCharactersPage';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  characters: SwapiCharacter[];

  constructor(private http: HttpClient,
    private dataSharingService: DataSharingService
  ) {

  }

  ngOnInit() {
    this.dataSharingService.getStarWarsAPIs().subscribe(data => {
      if (data) {
        this.http.get<SwapiCharacterPage>(data.people + "?expanded=true").subscribe((characters: SwapiCharacterPage) => {
          this.characters = characters.results;
        })
      }
    })
  }

}
