import { ListGeolocations } from "../../entities/geolocation/list";
import { ListAllGeolocationsRepositoryMock } from "../../mocks/geolocation/mock";
import { describe, expect, test } from "@jest/globals";
describe("listGeolocation", () => {
    test("should verify every field extant", async () => {
        const listAllGeolocationsRepository = new ListAllGeolocationsRepositoryMock();
        const listAllGeolocations = new ListGeolocations(listAllGeolocationsRepository)
        const geolocations = await listAllGeolocations.execute()
        expect(geolocations.every(item => typeof item.full_address == "string" && typeof item.long == "number" && typeof item.lat == "number" && typeof item.id == "number")).toBe(true)
    })
})