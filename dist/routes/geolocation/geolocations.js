"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGeoLocationsRoutes = void 0;
var express_1 = require("express");
var find_state_1 = require("../../controllers/geolocation/find_state");
var find_city_1 = require("../../controllers/geolocation/find_city");
var ListGeoLocationsRoutes = /** @class */ (function () {
    function ListGeoLocationsRoutes() {
        this.router = (0, express_1.Router)();
        this.route();
    }
    ListGeoLocationsRoutes.prototype.route = function () {
        this.router.get("/states/:state", new find_state_1.FindStateControler().execute);
        this.router.get("/cities/:city", new find_city_1.FindCityController().execute);
    };
    return ListGeoLocationsRoutes;
}());
exports.ListGeoLocationsRoutes = ListGeoLocationsRoutes;
//# sourceMappingURL=geolocations.js.map