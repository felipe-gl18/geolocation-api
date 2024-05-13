import { Geolocation } from "../../interfaces/geolocation/interface";
import { ListFilteredGeolocationsRepository } from "../../repositories/geolocation/list_filtered";

export class ListFilteredGeolocationsRepositoryMock implements ListFilteredGeolocationsRepository {
    geolocations?: Geolocation[];

    async listFilteredGeolocations(geolocations: Geolocation[]): Promise<void>{
        this.geolocations = geolocations;
    }
}