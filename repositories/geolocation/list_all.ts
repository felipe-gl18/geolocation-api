import { Geolocation } from "../../interfaces/geolocation/interface";
export interface ListAllGeolocationsRepository {
    listAllGeolocations: (geolocations: Geolocation[]) => Promise<void>
}