import{expect} from 'chai'
import {clinique} from '../Functional_programs/cliniqueManagement';

describe('Address class tests',function (){
    it('function work properly or not',()=>{
        this.timeout(5000);
        setTimeout(function() {
            console.log('waiting over.');
        },5000);
        var cliniqueClass=new clinique();
        var TestingOutput=cliniqueClass.cliniqueFunction();
        
        expect(TestingOutput[0]).not.to.be.null;
       
       
    })
    it('function work properly or not',()=>{
        this.timeout(5000);
        setTimeout(function() {
            console.log('waiting over.');
        },5000);
        var cliniqueClass=new clinique();
        var TestingOutput=cliniqueClass.cliniqueFunction();
        
        expect(TestingOutput[1]).not.to.be.null;
       
       
    })
    it('function work properly or not',()=>{
        this.timeout(5000);
        setTimeout(function() {
            console.log('waiting over.');
        },5000);
        var cliniqueClass=new clinique();
        var TestingOutput=cliniqueClass.cliniqueFunction();
        
        expect(TestingOutput[1]).not.to.be.NaN;
       
       
    })
   

})