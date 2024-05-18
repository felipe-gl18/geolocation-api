import { FindState } from "../../entities/geolocation/find_state";
import { FindStateRepositoryMock } from "../../mocks/geolocation/find_state";
export class FindStateControler {
    async execute(req: any, res: any){
        try{
            const { state } = req.params;  
            const findStateRepository = new FindStateRepositoryMock();
            const findState = new FindState(findStateRepository);
            const geolocations = await findState.execute(state);
            res.status(200).json({data: geolocations});
        } catch (err){
            res.status(500).json({error: "An error occurred while processing your request, please try again later!" + err})
        }
    }
}