import { PrismaClient } from "@prisma/client";
import { Geolocation } from "../../interfaces/geolocation/interface";
import { ListAllGeolocationsRepository } from "../../repositories/geolocation/list_all";
export class ListGeolocations {
    constructor(private readonly listAllGeolocationsRepository: ListAllGeolocationsRepository) {}
    async execute(): Promise<Geolocation[]> {
        const prisma = new PrismaClient();
        const response = await prisma.locations.findMany()
        await this.listAllGeolocationsRepository.listAllGeolocations(response)
        return await response;
    }
}