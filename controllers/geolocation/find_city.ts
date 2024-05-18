import {FindCity} from "../../entities/geolocation/find_city";
import {FindCityRepositoryMock} from "../../mocks/geolocation/find_city";
export class FindCityController {
    async execute(req: any, res: any){
        try{
            const {city} = req.params;
            const findCityRepository = new FindCityRepositoryMock();
            const findCity = new FindCity(findCityRepository);
            const geolocations = await findCity.execute(city);
            res.status(200).json({data: geolocations});
        } catch (err) {
            res.status(500).json({error: "An error occurred whie processing your request, please try again later!" + err});
        }
    }
}