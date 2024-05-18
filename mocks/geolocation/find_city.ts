import {Geolocation} from "../../interfaces/geolocation/interface"
import {FindCityRepository} from "../../repositories/geolocation/find_city"
export class FindCityRepositoryMock implements FindCityRepository {
    geolocations?: Geolocation[];
    async findCity(geolocations: Geolocation[]): Promise<void>{
        this.geolocations = geolocations;
    }
}