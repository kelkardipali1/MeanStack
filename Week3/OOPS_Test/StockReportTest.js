const assert=require('chai').assert
const path=require('../OOPS_Main_Program/StockReport')
var classAccess=new path.Stock();
var array=classAccess.stockReport();
var fs=require('fs');
var data=fs.readFileSync('/home/user/Desktop/mochatest/OOPS_Programs_JS/JSON_Files/StockReport.json')
var jsonData=JSON.parse(data)
describe('BDD TEST', function (){
    /* Required data display before testing starts */
        before(function(){
        console.log("Require StockReport.json file for this test")
        })
            describe('test for input data',function(){
                it('input share is null',function(){
               assert.isNotEmpty(array[0])
                    
                })
            })
            describe('test for switch case option',function(){
                it('option is greater than 3',function(){
               assert.isTrue(array[1]<=3)
                    
                })
            })
            describe('test for json file',function(){
                it('json data should be object',function(){
               assert.isObject(jsonData)
                    
                })
            })
            describe('test for json file',function(){
                it('json data should be array',function(){
               assert.isArray(jsonData.Stock)
                    
                })
            })
            after(function(){
                console.log('BDD test end')
            })
    })