export class ListFilteredGeolocationsRepositoryMock {
    async listFilteredGeolocations(geolocations) {
        this.geolocations = geolocations;
    }
}
