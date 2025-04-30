import { SwapiPlanet } from "./swapiPlanet";
import { SwapiSocials } from "./swapiSocial";
import { SwapiSupport } from "./swapiSupport";

export class SwapiPlanetPage {
  apiVersion: string;
  message: string;
  next: string;
  previous: string;
  results: SwapiPlanet[];
  social: SwapiSocials;
  support: SwapiSupport;
  timestamp: string;
  total_pages: number;
  total_records: number;
}
