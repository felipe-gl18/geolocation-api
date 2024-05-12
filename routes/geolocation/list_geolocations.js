import { Router } from "express";
import { ListGeolocationsController } from "../../controllers/geolocation/list_geolocation.js";
export class ListGeoLocationsRoutes {
    constructor() {
        this.router = Router();
        this.route();
    }
    route() {
        this.router.get("/:address", new ListGeolocationsController().execute);
    }
}
