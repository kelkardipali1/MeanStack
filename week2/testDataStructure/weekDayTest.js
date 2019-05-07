const assert=require('chai').assert
const read=require('/home/user/Desktop/mochatest/DataStructure_JS/WeekDay');
describe('Basic mocha test for weekDay',function(){
    it('month should be in between 1 to 12',function(){
        var result1=read[0];
        //console.log('result=',result1);
        assert.isTrue(result1>=1 && result1<=12);
    })
    it('year should be 4 digit ',function(){
        var result2=read[1];
        var count=0;
    while(result2>=1){
        
        count=count+1
        result2=result2/10;
    }
    //console.log(count);
    
       assert.isTrue(count==4)
    

    })
    it('if month and year is null then calender not display',function(){
        var result3=read[2];
        assert.isFalse(result3==null);
    

    })
    it('year shold be greater than zero',function(){
        var result4=read[3];
        assert.isTrue(result4>0);
    

    })


})