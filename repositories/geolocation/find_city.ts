import { Geolocation } from "../../interfaces/geolocation/interface"
export interface FindCityRepository {
    findCity: (geolocations: Geolocation[]) => Promise<void>
}