import { ListGeolocations } from "../../entities/geolocation/list.js";
import { ListAllGeolocationsRepositoryMock } from "../../mocks/geolocation/mock.js";
export class ListGeolocationsController {
    async execute(req, res) {
        const { address } = req.params;
        const listAllGeolocationsRepository = new ListAllGeolocationsRepositoryMock();
        const listAllGeolocations = new ListGeolocations(listAllGeolocationsRepository);
        const geolocations = await listAllGeolocations.execute(address);
        return res.json({ data: geolocations });
    }
}
