import { SwapiSocials } from "./swapiSocial";
import { StarWarsUniverseAPIs } from "./swapiStarWarsUniverseAPIs";
import { SwapiSupport } from "./swapiSupport";

export class SwapiData {
  apiVersion: string;
  message: string;
  result: StarWarsUniverseAPIs;
  social: SwapiSocials;
  support: SwapiSupport;
  timestamp: string;
}
