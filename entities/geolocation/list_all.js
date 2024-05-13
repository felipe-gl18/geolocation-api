import { PrismaClient } from "@prisma/client";
export class ListGeolocations {
    constructor(listAllGeolocationsRepository) {
        this.listAllGeolocationsRepository = listAllGeolocationsRepository;
    }
    async execute() {
        const prisma = new PrismaClient();
        const response = await prisma.locations.findMany();
        await this.listAllGeolocationsRepository.listAllGeolocations(response);
        return await response;
    }
}
