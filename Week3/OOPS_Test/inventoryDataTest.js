var assert=require('chai').assert //assertion library
var mainProgram=require('../OOPS_Main_Program/inventoryDataManagement'); // Main Program 
var choice=mainProgram.Invent() //caling class methods
var fs = require('fs');
var data=fs.readFileSync('/home/user/Desktop/mochatest/OOPS_Programs_JS/JSON_Files/Inventory.json') 
var jsonGrocery = JSON.parse(data);
describe('BDD TEST', function (){
    /* Required data display before testing starts */
    before(function(){
        console.log("Require Inventory.json file for this test")
    })
        /*
        * choices is for rice,wheat and pulses not more than that
        */
        describe('Test for checking choice that pass to switch case',function(){
            it('Entered choice should not greater than 3', function (){
                assert.isTrue(choice[0]<=3)
            });
        })
        /* 
        * Testing function work properly or not
        */
        describe('Test for checking display function gives right output or not',function(){
            it('Output should true', function (){
                var jsonData=choice[1]
                var displayData=choice[2]
                assert.equal(jsonData,displayData)
            });
        })
        /* 
        * Test for Entered weight
        */
        describe('Test for checking required weight type',function(){
            
            it('Weight should be integer', function (){
                
                assert.equal(choice[3],1)
                
            });
        })
        /* 
        * Test for Weight values
        */
        describe('Test for checking Required weight value',function(){
            
            it('Weight should be greater than 0', function (){
                
                assert.isTrue(choice[3]>0)
                
            });
        })
        /* 
        * Tests for json file is empty or not
        */
        describe('Test for json file ',function(){
            
            it('Json file is empty', function (){
                
                assert.isTrue(choice[2]!=null)
                
            });
        })
        /* 
        * Test for json File
        */
        describe('Test for json file ',function(){
            
            it('Json file is not found', function (){
                
                assert.isTrue(choice[4]=='Inventory.json')
                
            });
        })
        /* 
        * Tests For json file data
        */
        describe('Test for json Entered name input',function(){
            
            it('Entered name should be string', function (){
               for(var i=0;i<jsonGrocery.Rice.length;i++)
            {
                var riceName=jsonGrocery.Rice[i].name
                assert.typeOf(riceName,'String')
            }
               
    });
        })
        /* 
        * Tests For json file data
        */
        describe('Test for json Entered weight input',function(){
            
            it('Entered weight should be number', function (){
               for(var i=0;i<jsonGrocery.Rice.length;i++)
            {
                var riceWeight=jsonGrocery.Rice[i].weight
                assert.typeOf(riceWeight,'number')
            }
               
    });
        })
        /* 
        * Tests For json file data
        */
        describe('Test for json Entered price input',function(){
            
            it('Entered price should be number', function (){
               for(var i=0;i<jsonGrocery.Rice.length;i++)
            {
                var ricePrice=jsonGrocery.Rice[i].price
                assert.typeOf(ricePrice,'number')
            }
               
    });
        })

    /* 
    * Print msg at the end of test
    */
    after(function(){
        console.log("BDD test for inventory data end")
    })
});