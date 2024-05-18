import { Geolocation } from "../../interfaces/geolocation/interface";
import { FindStateRepository } from "../../repositories/geolocation/find_state";
import { prisma } from "../../prisma/prisma_client";
export class FindState {
    constructor(private readonly findStateRepository: FindStateRepository){}
    async execute(state: string): Promise<Geolocation[]>{
        const response = await prisma.locations.findMany(
            {
                where: {
                    state:{
                        contains: state,
                        mode: 'insensitive'
                    }
                },
            }
        );
        await this.findStateRepository.findState(response)
        return response;
    }
}