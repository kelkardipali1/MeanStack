const assert=require('chai').assert;
const prime=require('../DataStructure_JS/prime2D');
describe('Basic mocha test for prime 2D',function(){
    it('array should start from Zero beacause prime numbers are not negative',function(){
        var result1=prime[0];
        //console.log('result1',result1);
        assert.isTrue(result1>0);
    })
})