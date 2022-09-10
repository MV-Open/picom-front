import { AnnonceModel } from "./annonce.model";
import { ArretModel } from "./arret.model";

export class DiffusionModel {
    id: number;
    dateHeureDiffusion: Date;

    arret: ArretModel;
    annonce: AnnonceModel;

}