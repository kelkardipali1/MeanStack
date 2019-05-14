/*************************************************************************************************
 *  @Purpose        : To print the cards received by 4 players using 2D array.          
 *  @file           : deckOfCards.js
 *  @overview       : To initialize deck of cards having suit and Rank then shuffle the cards using 
                      Random method and then distribute 9 Cards to 4 Players and Print the Cards the 
                      received by the 4 Players.
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 10-05-2019
 ***************************************************************************************************/
var util = require('../OOPS_Utility/deckOfCardUtil');
function deckOfCards() {
/*
* calling the function
*/
util.distributingCards();
}
/*
* call to the function
*/
deckOfCards()