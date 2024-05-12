import { PrismaClient, Prisma } from "@prisma/client";
import { Geolocation } from "../../interfaces/geolocation/interface";
import { ListAllGeolocationsRepository } from "../../repositories/geolocation/list";
export class ListGeolocations {
    constructor(private readonly listAllGeolocationsRepository: ListAllGeolocationsRepository) {}
    async execute(address: string): Promise<Geolocation[]> {
        const prisma = new PrismaClient();
        const response = await prisma.locations.findMany({where: {address: {contains: address}}})
        await this.listAllGeolocationsRepository.listAllGeolocations(response)
        return await response;
    }
}