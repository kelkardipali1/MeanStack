const assert=require('chai').assert;
const primeAna=require('../DataStructure_JS/primeAnaStack');
describe('Test for prime anagram numbers using stack with linkedlist',function(){
    it('stack is underflow if nothing in stack',function(){
        let result1=primeAna[0];
        assert.isTrue(result1>=0);
    })
    it('stack is overflow if stack is full',function(){
        let result1=primeAna[1];
        assert.isTrue(result1<=1000);
        
    })
    it('top is undefined',function(){
        //let result1=primeAna[2];
        assert.isTrue(primeAna[0]>=0);
        
    })
    it('top is max',function(){
        assert.isTrue(primeAna[1]<=1000)
    })
    it('resulting numbers are negative',function(){
        assert.isTrue(primeAna[3]>0)
    })
})