import { PrismaClient } from "@prisma/client";
export class ListFilteredGeolocations {
    constructor(listFilteredGeolocationsRepository) {
        this.listFilteredGeolocationsRepository = listFilteredGeolocationsRepository;
    }
    async execute(address) {
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
