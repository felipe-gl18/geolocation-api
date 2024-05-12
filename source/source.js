import express from "express";
import cors from "cors";
import { ListGeoLocationsRoutes } from "../routes/geolocation/list_geolocations";
export class App {
    async execute() {
        const app = express();
        const geolocation_routes = new ListGeoLocationsRoutes();
        app.use(cors());
        app.use("/", geolocation_routes.router);
        app.listen(3000, () => {
            console.log("The server is running");
        });
    }
}
const app = new App();
app.execute();
