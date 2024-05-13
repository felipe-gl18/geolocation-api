import { ListGeolocations } from "../../entities/geolocation/list_all.js";
import { ListAllGeolocationsRepositoryMock } from "../../mocks/geolocation/list_all.js";
export class ListGeolocationsController {
    async execute(req, res) {
        try {
            const listAllGeolocationsRepository = new ListAllGeolocationsRepositoryMock();
            const listAllGeolocations = new ListGeolocations(listAllGeolocationsRepository);
            const geolocations = await listAllGeolocations.execute();
            return res.json({ data: geolocations });
        }
        catch (err) {
            res.status(500).json({ error: "An error occurred while processing your request, please try again later!" });
        }
    }
}