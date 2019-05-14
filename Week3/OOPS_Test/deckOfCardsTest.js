const assert=require('chai').assert;
var path=require('../OOPS_Utility/deckOfCardUtil')
describe('BDD test',function(){
    before(function(){
        console.log('Require DeckofCardsutil file')
    })
    /* 
    * Testing of suit Input
    */
    describe('Test for input',function(){
        it('suit input is in array format',function(){
            var z=path.deckOfCards();
            assert.isArray(z[1])
        })
    })
    
    describe('Test for input',function(){
        it('suit input not given',function(){
            var z=path.deckOfCards();
            assert.isTrue(z[1].length>0)
        })
    })
    describe('Test for input',function(){
        it('suit input is not string',function(){
            var z=path.deckOfCards();
            assert.typeOf(z[1][0],'String')
        })
    })
    describe('Test for input',function(){
        it('rank input is not given',function(){
            var z=path.deckOfCards();
            assert.isTrue(z[2].length>0)
        })
    })
    describe('Test for input',function(){
        it('suit should be four in length',function(){
            var z=path.deckOfCards();
            assert.isTrue(z[1].length>=4)
        })
    })
    describe('Test for input',function(){
        it('rank should be Thirtten in length',function(){
            var z=path.deckOfCards();
            assert.isTrue(z[2].length>=13)
        })
    })
    after(function(){
        console.log('BDD test end ')
    })

    

})