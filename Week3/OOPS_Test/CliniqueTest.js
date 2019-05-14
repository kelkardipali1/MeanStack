var assert=require('chai').assert;
const Program=require('../OOPS_Main_Program/cliniqueManagement')


var fs = require('fs');
var data=fs.readFileSync('/home/user/Desktop/mochatest/OOPS_Programs_JS/JSON_Files/Clinique.json') 
var jsonData = JSON.parse(data);



describe('BDD TEST', function (){
    /* Required data display before testing starts */
    before(function(){
        console.log("Require Clinique.json file for this test")
    })
    describe('Test for json file data', function (){
       
        it('json data is not object',function(){
           assert.isObject(jsonData)
        })
    
    })
    describe('Test for json file data', function (){
       
        it('json data is not array',function(){
           assert.isNotArray(jsonData)
        })
    
    })
    describe('Test for json file not found', function (){
       
        it('json file not found',function(){
           assert.isNotEmpty(data)
        })
    
    })
    describe('Test for Json data', function (){
       
        it('Test for type checking',function(){
            
            for(var i=0;i<jsonData.Doctors.length;i++){
           assert.typeOf(jsonData.Doctors[i].Name,'String')
            }
        })
    
    })
    describe('Test for Json data', function (){
       
        it('Entered Dr name for appointment is not present in the list',function(){
           var i=0
           var count;
            if(Program[1]==jsonData.Doctors[i].Name){
                count=1
                i++;
            }
            else{
                count=0;
                i++;
            }
            assert.equal(count,1)

            
        })
    
    })
    describe('Test for Json data', function (){
       
        it('Patient name is not given',function(){
        assert.isNotEmpty(Program[0])
            
        })
    
    })
    
})
