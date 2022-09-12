import { ClientModel } from "./client.model";
import { TrancheHoraireModel } from "./tranchehoraire.model";
import { ZoneModel } from "./zone.model";

export class AnnonceModel {
    id: number;
    dateHeureCreation: Date;
    dateHeureDebut: Date;
    dateHeureFin: Date;
    contenu: string;
    numeroCarte: string;
    anneeExpiration: number;
    moisExpiration: string;
    cryptogramme: string;
    montantRegleEnEuros: number;

    idClient: ClientModel;
    lstZones: ZoneModel[];
    lstTrancheHoraire: TrancheHoraireModel[];
}