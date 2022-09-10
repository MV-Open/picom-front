import { AdministrateurModel } from "./administrateur.model";
import { TrancheHoraireModel } from "./tranchehoraire.model";
import { ZoneModel } from "./zone.model";

export class TarifModel {
    id: number;
    prixEnEuros: number;

    administrateur: AdministrateurModel;
    trancheHoraire: TrancheHoraireModel;
    zone: ZoneModel;
}