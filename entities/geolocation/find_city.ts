import {Geolocation} from "../../interfaces/geolocation/interface";
import {FindCityRepository} from "../../repositories/geolocation/find_city";
import { prisma } from "../../prisma/prisma_client";
export class FindCity {
    constructor(private readonly findCityRepository: FindCityRepository){}
    async execute(city: string): Promise<Geolocation[]>{
        const response = await prisma.locations.findMany(
            {
                where: {
                    city: {
                        contains: city,
                        mode: 'insensitive'
                    }
                }
            }
        );
        await this.findCityRepository.findCity(response);
        return response;
    }
}