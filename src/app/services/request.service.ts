import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { SwapiData } from '../models/swapiData';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getSwapi(): Observable<SwapiData> {
    return this.http.get<SwapiData>("https://swapi.tech/api/");
  }

  //deprecated
  getErgast() {
    return this.http.get("http://ergast.com/mrd/");
  }
}
