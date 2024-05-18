import {Geolocation} from "../../interfaces/geolocation/interface";
import {FindStateRepository} from "../../repositories/geolocation/find_state";
export class FindStateRepositoryMock implements FindStateRepository {
    geolocations?: Geolocation[]
    async findState(geolocations: Geolocation[]): Promise<void>{
        this.geolocations = geolocations
    }
}