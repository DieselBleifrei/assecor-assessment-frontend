import { SwapiCharacter } from "./swapiCharacter";
import { SwapiSocials } from "./swapiSocial";
import { SwapiSupport } from "./swapiSupport";

export class SwapiCharacterPage {
  apiVersion: string;
  message: string;
  next: string;
  previous: string;
  results: SwapiCharacter[];
  social: SwapiSocials;
  support: SwapiSupport;
  timestamp: string;
  total_pages: number;
  total_records: number;
}
