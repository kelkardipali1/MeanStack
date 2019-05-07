const assert=require('chai').assert
const palindrome_Check=require('../DataStructure_JS/Palindrome')
describe('Basic mocha test for string',function(){
    it('string is null',function(){
        let size=palindrome_Check.length;
        //console.log(size);
        assert.notEqual(size,0);
    })
    it('string is not character array',function(){
        let str=palindrome_Check;
        str=str.split(" ")
        var count=0;
        for(var i=0;i<str.length;i++){
            if(str[i]>='a' && str[i]<='z' ||str[i]>='A' && str[i]<='Z'){
                count++;
            }
        }
        assert.equal(str.length,count);
        
    })
});