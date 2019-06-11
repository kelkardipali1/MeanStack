import{expect} from 'chai'
import {inventory1} from '../Functional_programs/inventoryManagement';

describe('Address class tests',function (){
    it('function work properly or not',()=>{
        
        
        var inventClass=new inventory1();
        var TestingOutput=inventClass.Invent()
        
        expect(TestingOutput[0]).not.to.be.null;
       
       
    })
})