import { PrismaClient } from "@prisma/client";
import { Geolocation } from "../../interfaces/geolocation/interface";
import { ListFilteredGeolocationsRepository } from "../../repositories/geolocation/list_filtered";
export class ListFilteredGeolocations {
    constructor(private readonly listFilteredGeolocationsRepository: ListFilteredGeolocationsRepository){}
    async execute(address: string): Promise<Geolocation[]>{
        const prisma = new PrismaClient();
        const response = await prisma.locations.findMany({
            where: {
                address: {
                    contains: address,
                    mode: 'insensitive'
                }
            },
            select: {
                address: true,
                lat: true,
                long: true,
            }
        });
        await this.listFilteredGeolocationsRepository.listFilteredGeolocations(response);
        return await response;
    }
}