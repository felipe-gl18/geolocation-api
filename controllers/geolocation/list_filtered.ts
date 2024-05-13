import { ListFilteredGeolocations } from "../../entities/geolocation/list_filtered";
import { ListFilteredGeolocationsRepositoryMock } from "../../mocks/geolocation/list_filtered";
export class ListFilteredGeolocationsController {
    async execute(req: any, res: any){
        try {   
            const { address } = req.body        
            const listFilteredGeolocationsRepository = new ListFilteredGeolocationsRepositoryMock();
            const listFilteredGeolocations = new ListFilteredGeolocations(listFilteredGeolocationsRepository);
            const geolocations = await listFilteredGeolocations.execute(address);
            res.status(200).json({data: geolocations})
        } catch (err) {
            res.status(500).json({error: "An error occurred while processing your request, please try again later!" + err})
        }
    }
}