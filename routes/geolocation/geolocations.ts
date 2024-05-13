import { Router } from "express";
import { ListGeolocationsController } from "../../controllers/geolocation/list_all";
import { ListFilteredGeolocationsController } from "../../controllers/geolocation/list_filtered";
export class ListGeoLocationsRoutes { 
    router? 
    constructor(){
        this.router = Router()
        this.route()
    }
    route(){
        this.router.get("/all", new ListGeolocationsController().execute)
        this.router.post("/find", new ListFilteredGeolocationsController().execute)
    }
}