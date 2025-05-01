import { SwapiMovie } from "./swapiMovie";
import { SwapiSocials } from "./swapiSocial";
import { SwapiSupport } from "./swapiSupport";

export class SwapiMovieResult {
  apiVersion: string;
  message: string;
  result: SwapiMovie;
  social: SwapiSocials;
  support: SwapiSupport;
  timestamp: string;
}
