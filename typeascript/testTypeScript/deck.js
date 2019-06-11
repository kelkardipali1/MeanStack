"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var deckOfCards_1 = require("../Functional_programs/deckOfCards");
describe('deck class tests', function () {
    var _this = this;
    it('function work properly or not', function () {
        _this.timeout(5000);
        setTimeout(function () {
            console.log('waiting over.');
        }, 5000);
        var DeckClass = new deckOfCards_1.deckOfCards();
        var TestingOutput = DeckClass.Cards;
        /* suit not be null*/
        chai_1.expect(TestingOutput[0]).not.to.be["null"];
    });
});
