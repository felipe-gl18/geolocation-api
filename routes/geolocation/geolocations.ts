import { Router } from "express";
import { FindStateControler } from "../../controllers/geolocation/find_state";
import { FindCityController } from "../../controllers/geolocation/find_city";
export class ListGeoLocationsRoutes { 
    public router: Router; 
    constructor(){
        this.router = Router()
        this.route()
    }
    route(){
        this.router.get("/states/:state", new FindStateControler().execute);
        this.router.get("/cities/:city", new FindCityController().execute);
    }
}