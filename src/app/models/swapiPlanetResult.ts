import { SwapiPlanet } from "./swapiPlanet";
import { SwapiSocials } from "./swapiSocial";
import { SwapiSupport } from "./swapiSupport";

export class SwapiPlanetResult {
  apiVersion: string;
  message: string;
  result: SwapiPlanet;
  social: SwapiSocials;
  support: SwapiSupport;
  timestamp: string;
}
