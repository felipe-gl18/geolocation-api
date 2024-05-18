import { Geolocation } from "../../interfaces/geolocation/interface";
export interface FindStateRepository {
    findState: (geolocations: Geolocation[]) => Promise<void>
}