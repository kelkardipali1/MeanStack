const assert=require('chai').assert;
const bPara=require('../DataStructure_JS/balancedParenthesis')
describe('Basic mocha test for Balanced Parenthesis',function(){
    it('expression is not entered',function(){
        assert.isFalse(bPara=="");
    })
    it('stack is underflow',function(){
        assert.isTrue(bPara.length>0);
    })
    it('parenthesis not Entered',function(){
        var count=0;
        for(var i=0;i<bPara.length;i++){
            for(var j=0;j<bPara.length;j++){
                if (bPara[i]=="(" || bPara[j]==")"){
                    count++;

                }
            }
        }
        console.log('count=',count);
        assert.isFalse(count<=0);
    })
    
});