export class ListAllGeolocationsRepositoryMock {
    async listAllGeolocations(geolocations) {
        this.geolocations = geolocations;
    }
}
