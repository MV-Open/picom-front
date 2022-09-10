import { ZoneModel } from "./zone.model";

export class ArretModel {
    id: number;
    nom: string;
    latitude: number;
    longitude: number;

    zone: ZoneModel;
}