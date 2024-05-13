import { Router } from "express";
import { ListGeolocationsController } from "../../controllers/geolocation/list_all.js";
import { ListFilteredGeolocationsController } from "../../controllers/geolocation/list_filtered.js";
export class ListGeoLocationsRoutes {
    constructor() {
        this.router = Router();
        this.route();
    }
    route() {
        this.router.get("/all", new ListGeolocationsController().execute);
        this.router.post("/find", new ListFilteredGeolocationsController().execute);
    }
}
