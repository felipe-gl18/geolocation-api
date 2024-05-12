import { PrismaClient } from "@prisma/client";
export class ListGeolocations {
    constructor(listAllGeolocationsRepository) {
        this.listAllGeolocationsRepository = listAllGeolocationsRepository;
    }
    async execute(address) {
        const prisma = new PrismaClient();
        const response = await prisma.locations.findMany({ where: { address: { contains: address } } });
        await this.listAllGeolocationsRepository.listAllGeolocations(response);
        return await response;
    }
}
