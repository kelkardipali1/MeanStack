var assert=require('chai').assert //assertion library
var util=require('../OOPS_Utility/AddressBookUtil')
var fs = require('fs');
var data=fs.readFileSync('/home/user/Desktop/mochatest/OOPS_Programs_JS/JSON_Files/addressBook.json') 
var jsonData = JSON.parse(data);
var Classconst=new util.Address();
var assert=require('chai').assert //assertion library
var util=require('../OOPS_Utility/AddressBookUtil') //utility Path
/*
* Taking Json file input
*/
var fs = require('fs');
var data=fs.readFileSync('/home/user/Desktop/mochatest/OOPS_Programs_JS/JSON_Files/addressBook.json') 
var jsonData = JSON.parse(data);
/* 
* calling utility function 
*/
var Classconst=new util.Address();

var ProfileData=Classconst.openProfile();
describe('BDD TEST', function (){
/* Required data display before testing starts */
    before(function(){
    console.log("Require addressBook.json file for this test")
    })
        describe('Test for json file data', function (){
        /*
        * Testing Type of Entered Name of Person
        */
        it('Name should be string',function(){
        for(var i=0;i<jsonData.Person.length;i++)
        assert.typeOf(jsonData.Person[i].Name,'String')
        })
        })
        describe('Test for json file data', function (){
        /* 
        * Testing json file data is in object format or not 
        */
        it('Json File data is not object',function(){
        assert.isObject(jsonData);
        })
        })
        describe('Test for json file data', function (){
        /* Testing json file data object is array or not */
        it('is array not array',function(){
        assert.isArray(jsonData.Person)
        })
        })
        describe('Test for json file data', function (){
        /* Testing json file input for street is string or not*/
        it('Street should be string',function(){
        for(var i=0;i<jsonData.Person.length;i++)
        assert.typeOf(jsonData.Person[i]["Address"].Street,'String')
        })
        })
        describe('Test for json file data', function (){
        /* 
        * Testing mobile number should be 10 digit 
        */
        it('mobile number should be 10 digit',function(){
        for(var i=0;i<jsonData.Person.length;i++)
        assert.equal(jsonData.Person[i]["Address"].PhoneNum.length,10)
        })
        })
        describe('Test for addressBook function', function (done){
        /* Tetsing openProfile function */
        it('open profile person input doesnot given',function(){
        assert.isNotEmpty(ProfileData[0])
        })
        })
        describe('Test for json file found or not', function (done){
        /* 
        * Testing Json File is found or not
        */ 
        it('file found or not',function(){
        assert.isNotNull(data)
        })
        })
        describe('Test for addressBook function', function (done){
        /* 
        * Tetsing openProfile function 
        */
        it('new city  doesnt given for updation',function(){
        
        assert.isNotEmpty(ProfileData[1])
        })
        })
    /* 
    * Print msg at the end of test
    */
    after(function(){
    console.log("BDD test for AddressBook end")
    })

})
