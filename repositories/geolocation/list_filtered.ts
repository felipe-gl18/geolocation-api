import { Geolocation } from "../../interfaces/geolocation/interface";
export interface ListFilteredGeolocationsRepository{
    listFilteredGeolocations: (geolocations: Geolocation[]) => Promise<void>
}