import { Geolocation } from "../../interfaces/geolocation/interface";
import { ListAllGeolocationsRepository } from "../../repositories/geolocation/list";
export class ListAllGeolocationsRepositoryMock implements ListAllGeolocationsRepository {
    geolocations?: Geolocation[]
    async listAllGeolocations(geolocations: Geolocation[]): Promise<void>{
        this.geolocations = geolocations;
    }
}