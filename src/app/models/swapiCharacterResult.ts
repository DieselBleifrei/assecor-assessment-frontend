import { SwapiCharacter } from "./swapiCharacter";
import { SwapiSocials } from "./swapiSocial";
import { SwapiSupport } from "./swapiSupport";

export class SwapiCharacterResult {
  apiVersion: string;
  message: string;
  result: SwapiCharacter;
  social: SwapiSocials;
  support: SwapiSupport;
  timestamp: string;
}
