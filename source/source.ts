import express from "express";
import cors from "cors";
import { ListGeoLocationsRoutes } from "../routes/geolocation/geolocations"; 
export class App {
    async execute(){
        const app = express();
        const geolocation_routes = new ListGeoLocationsRoutes();
        app.use(cors())
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))
        app.use("/", geolocation_routes.router)
        app.get("/", (req: any, res: any) => {
            res.status(200).json(
                {
                    message: "Hello Dev, follow our routes", 
                    "/states/:state": "Returns all locations that includes the state value", 
                    "/cities/:city": "Returns all locations that includes the city value"
                }
            )
        })
        app.listen(3000, () => {
            console.log("The server is running");
        })
    }
}
const app = new App()
app.execute()