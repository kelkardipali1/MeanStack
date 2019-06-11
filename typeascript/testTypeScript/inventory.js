"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var inventoryManagement_1 = require("../Functional_programs/inventoryManagement");
describe('Address class tests', function () {
    it('function work properly or not', function () {
        var inventClass = new inventoryManagement_1.inventory1();
        var TestingOutput = inventClass.Invent();
        chai_1.expect(TestingOutput[0]).not.to.be["null"];
    });
});
