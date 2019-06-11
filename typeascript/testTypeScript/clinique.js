"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var cliniqueManagement_1 = require("../Functional_programs/cliniqueManagement");
describe('Address class tests', function () {
    var _this = this;
    it('function work properly or not', function () {
        _this.timeout(5000);
        setTimeout(function () {
            console.log('waiting over.');
        }, 10000);
        var cliniqueClass = new cliniqueManagement_1.clinique();
        var TestingOutput = cliniqueClass.cliniqueFunction();
        chai_1.expect(TestingOutput[0]).not.to.be["null"];
    });
    it('function work properly or not', function () {
        _this.timeout(5000);
        setTimeout(function () {
            console.log('waiting over.');
        }, 5000);
        var cliniqueClass = new cliniqueManagement_1.clinique();
        var TestingOutput = cliniqueClass.cliniqueFunction();
        chai_1.expect(TestingOutput[1]).not.to.be["null"];
    });
    it('function work properly or not', function () {
        _this.timeout(5000);
        setTimeout(function () {
            console.log('waiting over.');
        }, 5000);
        var cliniqueClass = new cliniqueManagement_1.clinique();
        var TestingOutput = cliniqueClass.cliniqueFunction();
        chai_1.expect(TestingOutput[1]).not.to.be.NaN;
    });
});
