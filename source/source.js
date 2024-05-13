import express from "express";
import cors from "cors";
import { ListGeoLocationsRoutes } from "../routes/geolocation/geolocations.js";
export class App {
    async execute() {
        const app = express();
        const geolocation_routes = new ListGeoLocationsRoutes();
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use("/", geolocation_routes.router);
        app.get("/", (req, res) => {
            res.status(200).json({ message: "Hello Dev, follow our routes", all: "Returns all locations values from our database!", find: "Its a POST route, that except any search value (Rua Mariinha Paiva, Belo Horizonte, Ceará), please insert just one value, whether it's a street, state, or city." });
        });
        app.listen(3000, () => {
            console.log("The server is running");
        });
    }
}
const app = new App();
app.execute();
