import{expect} from 'chai'
import {Address2} from '../Functional_programs/addressBook1';

describe('Address class tests',function (){
    it('CreateAddress work properly or not',()=>{
        this.timeout(5000);
        setTimeout(function() {
            console.log('waiting over.');
        },5000);
        var addressClass=new Address2();
        var TestingOutput=addressClass.addressFunction();
        
        expect(TestingOutput).not.to.be.null;
       
       
    })
   

})