import { Injectable } from '@angular/core';
import { StarWarsUniverseAPIs } from '../models/swapiStarWarsUniverseAPIs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private starWarsApis: BehaviorSubject<StarWarsUniverseAPIs | null> = new BehaviorSubject<StarWarsUniverseAPIs | null>(null);

  constructor() { }

  getStarWarsAPIs() {
    return this.starWarsApis
  }

  getStarWarsAPIsValue() {
    return this.starWarsApis.value;
  }

  setStarWarsAPIs(starWarsApis: StarWarsUniverseAPIs) {
    return this.starWarsApis.next(starWarsApis);
  }
}
