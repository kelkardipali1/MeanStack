const assert=require('chai').assert;
const bST=require('../DataStructure_JS/binarySearchTree');
describe('Basic mocha test for BST',function(){
    it('Input number is floating number',function(){
        let result1=bST[0];
        assert.isTrue(result1%1==0);
    })
    it('Bst not possible for negative input number',function(){
        let result2=bST[1];
        //console.log('result2',bST[1]);

        assert.isTrue(result2>=0);
        
    })
    it('No input found',function(){
        let result3=bST[2];
        //console.log('result2',bST[1]);

        assert.isFalse(result3=="");
        
    })
    it('data not found for  printing nodes',function(){
        let result4=bST[3];
        //console.log('result2',bST[1]);

        assert.isFalse(result4=="");
        
    })
    it('Bst not possible for negative nodes number',function(){
        let result5=bST[4];
        //console.log('result2',bST[1]);

        assert.isTrue(result5>=0);
        
    })
    it('total numbers of subtrees are zero if nodes and input number are zero',function(){
        
        let result6=bST[2]
        //console.log('result2',bST[1]);


        assert.isTrue(result6!=0);
        
    })
})