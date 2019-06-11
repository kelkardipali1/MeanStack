"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var addressBook1_1 = require("../Functional_programs/addressBook1");
describe('Address class tests', function () {
    var _this = this;
    it('CreateAddress work properly or not', function () {
        _this.timeout(5000);
        setTimeout(function () {
            console.log('waiting over.');
        }, 5000);
        var addressClass = new addressBook1_1.Address2();
        var name = addressClass.addressFunction();
        chai_1.expect(name).not.to.be["null"];
    });
});
