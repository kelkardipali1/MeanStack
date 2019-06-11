import{expect} from 'chai'
import {deckOfCards} from '../Functional_programs/deckOfCards';

describe('deck class tests',function (){
    it('function work properly or not',()=>{
        this.timeout(5000);
        setTimeout(function() {
            console.log('waiting over.');
        },5000);
        var DeckClass=new deckOfCards();
        var TestingOutput=DeckClass.Cards;
        /* cards not be null*/
        expect(TestingOutput[0]).not.to.be.null;
       
       
    })
    it('function work properly or not',()=>{
        this.timeout(5000);
        setTimeout(function() {
            console.log('waiting over.');
        },5000);
        var DeckClass=new deckOfCards();
        var TestingOutput=DeckClass.Cards;
        /* suit not be null*/
        expect(TestingOutput[1]).not.to.be.null;
       
       
    })
})