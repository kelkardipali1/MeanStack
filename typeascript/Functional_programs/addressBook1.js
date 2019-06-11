"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/******************************************************************************
 *  @Purpose        : To create address Book
 *  @file           : addressBook1.ts
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 *  @object_feature : Encapsulation,inheritance,access modifires
 ******************************************************************************/
var Address = /** @class */ (function () {
    function Address() {
    }
    Address.prototype.createAddress = function () {
        try {
            var read = require('readline-sync');
            var fs = require('fs');
            var data = fs.readFileSync('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json');
            var addressb = JSON.parse(data);
            var nameRestriction = /[a-z]/ig;
            var contactRestriction = /[0-9]/g;
            var name = read.question("Please enter your first name: ");
            if (nameRestriction.test(name) == false) {
                console.log("Invalid name!");
                return false;
            }
            var lastName = read.question("Please enter your last name: ");
            /**
             * validating last name
             */
            if (nameRestriction.test(lastName) == false) {
                console.log("Invalid name!");
                return false;
            }
            /**
             * add the address information
             */
            console.log("***Address Info***");
            var street = read.question("Street: ");
            var city = read.question("City: ");
            if (nameRestriction.test(city) == false) {
                console.log("Invalid city name!");
                return false;
            }
            var state = read.question("State: ");
            if (nameRestriction.test(state) == false) {
                console.log("Invalid state name!");
                return false;
            }
            var nation = read.question("Nationality: ");
            if (nameRestriction.test(nation) == false) {
                console.log("Invalid Nationality!");
                return false;
            }
            var zip = read.question("Zip code: ");
            /**
             * zip code validation that should not exceed length 6
             */
            if (contactRestriction.test(zip) == false || zip.length > 6) {
                console.log("Invalid zip code!");
                return false;
            }
            var phoneNum = read.question("Phone number: ");
            if (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
                console.log("Invalid phone number!");
                return false;
            }
            /**
             * push each value into json
             */
            addressb.Person.push({
                "Name": name,
                "LastName": lastName,
                "Address": {
                    "Street": street,
                    "City": city,
                    "State": state,
                    "Nationality": nation,
                    "Zip": zip,
                    "PhoneNum": phoneNum
                }
            });
            /**
             * write file into json
             */
            fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                if (err)
                    throw err;
                console.log('Done!');
            });
            console.log("Address updated succesfully!");
            console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
        }
        catch (err) {
            throw ("Error in create Address");
        }
    };
    /*
    **for Comparing
    */
    Address.prototype.compare1 = function (a, b) {
        try {
            if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
                return -1;
            }
            if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
                return 1;
            }
        }
        catch (err) {
            throw ("err in compare method");
        }
        return 0;
    };
    Address.prototype.sorting = function () {
        try {
            var fs = require('fs');
            var data = fs.readFileSync('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json');
            var addressb = JSON.parse(data);
            var sortTest = addressb.Person.sort(this.compare1);
            console.log(addressb.Person.sort(this.compare1));
        }
        catch (err) {
            throw ("Error in sorting method");
        }
        return sortTest;
    };
    Address.prototype.openProfile = function () {
        try {
            var read = require('readline-sync');
            var fs = require('fs');
            var data = fs.readFileSync('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json');
            var addressb = JSON.parse(data);
            var nameRestriction = /[a-z]/ig;
            var contactRestriction = /[0-9]/g;
            var temp = -1;
            if (addressb.Person.length > 0) {
                for (var i = 0; i < addressb.Person.length; i++) {
                    console.log(addressb.Person[i]);
                }
                console.log("Welcome!!");
                var update = read.question("Please enter the name of profile: ");
                var update1 = update;
                for (var k = 0; k < addressb.Person.length; k++) {
                    if (update == addressb.Person[k].Name) {
                        temp = k;
                        console.log("What you want to do?");
                        console.log("1: Update");
                        console.log("2: Delete");
                        console.log("3: Sort");
                        console.log("4: Save");
                        console.log("5: Exit");
                        var choice2 = read.question("Please enter your choice: ");
                        switch (parseInt(choice2)) {
                            case 1:
                                /**
                                 * update profile
                                 */
                                console.log("What do you want to update? ");
                                console.log("1: Street");
                                console.log("2: City");
                                console.log("3: State");
                                console.log("4: Nationality");
                                console.log("5: Zip code");
                                console.log("6: Phone");
                                console.log("7: Exit");
                                var choice3 = read.question("Please enter your choice: ");
                                switch (parseInt(choice3)) {
                                    case 1:
                                        var sUpdate = read.question("Enter the new street number: ");
                                        if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                        /**
                                         * update whole data after changes
                                         */
                                        var obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": sUpdate,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        addressb.Person[k] = obj;
                                        /**
                                         * save into json every time after update
                                         */
                                        fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                            if (err)
                                                throw err;
                                            console.log('File Saved!!');
                                        });
                                        break;
                                    case 2:
                                        var cUpdate = read.question("Enter the new city name: ");
                                        if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                        obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": cUpdate,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        addressb.Person[k] = obj;
                                        fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                            if (err)
                                                throw err;
                                            console.log('File Saved!!');
                                        });
                                        console.log("Saved Successfully");
                                        break;
                                    case 3:
                                        var stUpdate = read.question("Enter the new state name: ");
                                        if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                        obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": stUpdate,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        addressb.Person[k] = obj;
                                        fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                            if (err)
                                                throw err;
                                            console.log('File Saved!!');
                                        });
                                        break;
                                    case 4:
                                        var nUpdate = read.question("Enter the new nation name: ");
                                        if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                        obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": nUpdate,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        addressb.Person[k] = obj;
                                        fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                            if (err)
                                                throw err;
                                            console.log('File Saved!!');
                                        });
                                        break;
                                    case 5:
                                        var zUpdate = read.question("Enter the new zip code: ");
                                        if (contactRestriction.test(zUpdate) == false) {
                                            console.log("Invalid number!");
                                            return false;
                                        }
                                        obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": zUpdate,
                                                "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        addressb.Person[k] = obj;
                                        fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                            if (err)
                                                throw err;
                                            console.log('File Saved!!');
                                        });
                                        break;
                                    case 6:
                                        var pUpdate = read.question("Enter the new phone number: ");
                                        if (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                            console.log("Invalid number!");
                                            return false;
                                        }
                                        obj = {
                                            "Name": addressb.Person[k].Name,
                                            "LastName": addressb.Person[k].LastName,
                                            "Address": {
                                                "Street": addressb.Person[k]["Address"].Street,
                                                "City": addressb.Person[k]["Address"].City,
                                                "State": addressb.Person[k]["Address"].State,
                                                "Nationality": addressb.Person[k]["Address"].Nation,
                                                "Zip": addressb.Person[k]["Address"].Zip,
                                                "PhoneNum": pUpdate
                                            }
                                        };
                                        addressb.Person[k] = obj;
                                        fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                            if (err)
                                                throw err;
                                            console.log('File Saved!!');
                                        });
                                        break;
                                    case 7:
                                        console.log("ThankYou!");
                                        //address();
                                        break;
                                }
                                break;
                            case 2:
                                /**
                                 * to delete profile
                                 */
                                update = read.question("Please enter the index you want to delete: ");
                                delete addressb.Person[update];
                                for (var k = 0; k < addressb.Person.length; k++) {
                                    if (addressb.Person[k] == null) {
                                        addressb.Person.splice(k, 1);
                                    }
                                }
                                /**
                                 * write file
                                 */
                                fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err)
                                        throw err;
                                    console.log('Done!');
                                });
                                break;
                            case 3:
                                /**
                                 * sort the profile by name
                                 */
                                this.sorting();
                                fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err)
                                        throw err;
                                    console.log('File Saved!!');
                                });
                                break;
                            case 4:
                                fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/addressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err)
                                        throw err;
                                    console.log('File Saved!!');
                                });
                                break;
                            case 5:
                                console.log("ThankYou!!");
                                //address();
                                break;
                            default:
                                console.log("Please enter valid option");
                                break;
                        }
                    }
                }
                if (temp == -1) {
                    /**
                     * check if name is available in json or not
                     */
                    console.log("Profile unavailable!!Please create new one.");
                    //address();
                }
            }
            else {
                console.log("No profiles to display!!Please create a new profile!");
                this.createAddress();
            }
        }
        catch (err) {
            throw ("err in open profile");
        }
    };
    return Address;
}());
var Address2 = /** @class */ (function (_super) {
    __extends(Address2, _super);
    function Address2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Address2.prototype.addressFunction = function () {
        var read = require('readline-sync');
        var add = new Address();
        /*
        *creating user interface for which operation will perform
        */
        console.log("*****ADDRESS BOOK*****");
        console.log("1:Create Profile");
        console.log("2:Open Address Book");
        console.log("3:Exit");
        var choice1 = read.question("Please enter your choice: ");
        /*
        *perform operations according to choice
        */
        switch (parseInt(choice1)) {
            case 1:
                var test1 = add.createAddress();
                break;
            case 2:
                var test2 = add.openProfile();
                break;
            case 3:
                console.log("ThankYou!");
                break;
            default:
                console.log("Please enter a valid option!!");
        }
        return test1;
    };
    return Address2;
}(Address));
exports.Address2 = Address2;
var address2 = new Address2();
address2.addressFunction();
