/*************************************************************************************************
 *  @Purpose        : To create a proper address book to store new address informations           
 *  @file           : AddressBook.js
 *  @overview       : Add new entries each time and manage that address book and perform opeartions
                      like add,delete,search,update and sort information.
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 9-5-2019
 ***************************************************************************************************/

function addressBookMain(){
/**
 * creating a function to perform main opeartions such as create,open profile
 */
    var util=require('../OOPS_Utility/AddressBookUtil')
    /*
    *calling to the Address class constrouctor
    */
    var a = new util.Address();
    /* 
    * node module prompt
    */
    var prompt = require('prompt-sync')();
    /* 
    *creating user interface for which operation will perform
    */
    console.log("*****ADDRESS BOOK*****");
    console.log("1:Create Profile");
    console.log("2:Open Address Book");
    console.log("3:Exit");
    var choice1 = prompt("Please enter your choice: ");
    /* 
    *perform operations according to choice 
    */
    switch (parseInt(choice1)) {
        case 1:
            a.createAddress();
            break;
        case 2:
            a.openProfile();
            break;
        case 3:
            console.log("ThankYou!");
            break;
        default:
            console.log("Please enter a valid option!!");
    }
}
addressBookMain();