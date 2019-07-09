"use strict";
exports.__esModule = true;
var Address = /** @class */ (function () {
    function Address(state, Country) {
        this.state = state;
        this.Country = Country;
    }
    Address.prototype.getaddress = function () {
        return this.state + ' ' + this.Country;
    };
    return Address;
}());
exports.Address = Address;
