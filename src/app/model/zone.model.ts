import { AnnonceModel } from "./annonce.model";
import { ArretModel } from "./arret.model";

export class ZoneModel {
    id: number;
    nom: string;

    lstAnnonces: AnnonceModel[];
    lstArrets: ArretModel[];
}