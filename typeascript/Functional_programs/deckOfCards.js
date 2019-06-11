"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var deckOfCards = /** @class */ (function () {
    function deckOfCards() {
    }
    deckOfCards.prototype.Cards = function () {
        /*
        * Taking input
        */
        try {
            var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
            var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
            var n = suit.length * rank.length;
            /*
            Taking Empty Array for appending the suit and rank array
            */
            var cards = [];
            for (var i_1 = 0; i_1 < suit.length; i_1++) {
                for (var j = 0; j < rank.length; j++) {
                    cards.push("" + suit[i_1] + rank[j]);
                }
            }
            var temp;
            for (var i = 0; i < n; i++) {
                /*
                Taking input randomly
                */
                var shuff = Math.floor(Math.random() * n);
                /*
                swaping
                */
                temp = cards[shuff];
                cards[shuff] = cards[i];
                cards[i] = temp;
            }
            /* For Testing*/
            var array = [];
            array[0] = cards;
            array[1] = suit;
            array[2] = rank;
        }
        catch (err) {
            throw ("err in cards method");
        }
        return array;
    };
    return deckOfCards;
}());
exports.deckOfCards = deckOfCards;
/*
*To distribute 9 cards to 4 people each and print what cards does each person have
*/
var distribute = /** @class */ (function (_super) {
    __extends(distribute, _super);
    function distribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    distribute.prototype.distributingCards = function () {
        try {
            var play = 0;
            var card = this.Cards();
            var cards = card[0];
            /*
            * Taking 2D Empty array
            */
            var personCards = [[], [], [], []];
            for (var p = 0; p < 4; p++) {
                for (var j = 0; j < 9; j++) {
                    personCards[p][j] = cards[j + play];
                }
                play = Math.floor(Math.random() * cards.length);
            }
            console.log(personCards);
            console.log(" ");
            console.log(" \n cards distributed among the four players are \n");
            console.log("the first players cards are : " + personCards[0]);
            console.log("the second players cards are : " + personCards[1]);
            console.log("the third players cards are : " + personCards[2]);
            console.log("the fourth players cards are : " + personCards[3]);
        }
        catch (err) {
            throw ("err in distributing cards method");
        }
    };
    return distribute;
}(deckOfCards));
/*var classAccess1=new distribute();
classAccess1.distributingCards();
*/
