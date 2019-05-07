const assert=require('chai').assert;
const unorder=require('../DataStructure_JS/unorderedLinkedList');
describe('Basic mocha test for unordered linked list',function(){
    it('No serch element given',function(){
        assert.isFalse(unorder[0]=="");
    })
    it('element for searching is character array',function(){
        var count=0;
        for(var i=0;i<unorder.length;i++){
            if(unorder[i]>='a' && unorder[i]<='z' ||unorder[i]>='A' && unorder[i]<='Z'){
                count++;
            }
        }
        assert.equal(unorder.length,count);
    })
})