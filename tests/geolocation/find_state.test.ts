import { describe, expect, test } from "@jest/globals";
import { FindStateRepositoryMock } from "../../mocks/geolocation/find_state";
import { FindState } from "../../entities/geolocation/find_state";
import { Geolocation } from "../../interfaces/geolocation/interface";
describe("findState", () => {
    test("should verify state field extant", async () => {
        const state: string = "ceara";
        const findStateRepository = new FindStateRepositoryMock();
        const findState = new FindState(findStateRepository);
        const geolocations = await findState.execute(state);
        expect(geolocations.length).toBeGreaterThan(0);
    })
})