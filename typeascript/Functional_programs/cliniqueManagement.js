"use strict";
exports.__esModule = true;
var restriction = {};
restriction.nameRestriction = /[a-z]/ig;
restriction.contactRestriction = /[0-9]/g;
var clinique = /** @class */ (function () {
    function clinique() {
    }
    clinique.prototype.cliniqueFunction = function () {
        try {
            var prompt = require('prompt-sync')();
            var fs = require('fs');
            var data = fs.readFileSync('/home/user/Desktop/typeScriptPrograms/JSON_Files/clinique.json');
            /**
             * parse data using json
             */
            var clinique = JSON.parse(data);
            /**
             * name and contact restriction
             */
            do {
                console.log("1.ADD Appointment\n2.PRINTLIST\n3.SEARCH\n4.EXIT");
                var option = prompt('Enter the option:');
                switch (parseInt(option)) {
                    case 1:
                        /**
                         * print list of doctors available
                         */
                        console.log("*Doctors Available*");
                        console.log(clinique.Doctors);
                        var Name = prompt('Patient Name: ');
                        if (restriction.nameRestriction.test(Name) == false) {
                            console.log("Invalid name!");
                            return false;
                        }
                        /**
                         * generating ID using random function
                         */
                        var ID = Math.random() * 1000;
                        var mobNo = prompt('Mobile Number: ');
                        /**
                         * validating phone number
                         */
                        if (restriction.contactRestriction.test(mobNo) == false || mobNo.length != 10) {
                            console.log("Invalid mobile number!");
                            return false;
                        }
                        var Age = prompt('Age: ');
                        /**
                         * validate age
                         */
                        if (restriction.contactRestriction.test(Age) == false) {
                            console.log("Inappropriate age!");
                            return false;
                        }
                        var Appointed_To = prompt('whose appointment u want: ');
                        if (restriction.nameRestriction.test(Appointed_To) == false) {
                            console.log("Invalid name!");
                            return false;
                        }
                        /**
                         * push each value into the json array
                         */
                        clinique.Patients.push({
                            "Name": Name,
                            "ID": ID,
                            "mobNo": mobNo,
                            "Age": Age,
                            "Appointed_To": Appointed_To
                        });
                        console.log("Appointment Added Successfully...");
                        console.log(clinique);
                        /**
                         * write the file into json
                         */
                        fs.writeFile('/home/user/Desktop/typeScriptPrograms/JSON_Files/clinique.json', JSON.stringify(clinique), function (err) {
                            if (err)
                                throw err;
                        });
                        break;
                    case 2:
                        /**
                         * print whole list from clinique object
                         */
                        console.log(clinique);
                        break;
                    case 3:
                        console.log("****SEARCH LIST******");
                        console.log("1.Doctor\n2.Patient");
                        var option2 = prompt('Enter Option: ');
                        if (option2 == 1) {
                            console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability");
                            var option3 = prompt('Enter option: ');
                            if (option3 == 1) {
                                var i = prompt('Name: ');
                                for (var key in clinique.Doctors) {
                                    if (clinique.Doctors[key].Name == i) {
                                        console.log("****Doctor Info****");
                                        console.log(clinique.Doctors[key]);
                                    }
                                }
                            }
                            else if (option3 == 2) {
                                var i = prompt('ID: ');
                                /**
                                 * find key in the doctor object we want to search
                                 */
                                for (var key in clinique.Doctors) {
                                    if (clinique.Doctors[key].ID == i) {
                                        console.log("****Doctor's Info****");
                                        console.log(clinique.Doctors[key]);
                                    }
                                }
                            }
                            else if (option3 == 3) {
                                var i = prompt('Specialization: ');
                                /**
                                 * find key in the doctor object we want to search
                                 */
                                for (var key in clinique.Doctors) {
                                    if (clinique.Doctors[key].Specialization == i) {
                                        console.log("****Doctor's Info****");
                                        console.log(clinique.Doctors[key]);
                                    }
                                }
                            }
                            else if (option3 == 4) {
                                var i = prompt('Availability: ');
                                /**
                                 * find key in the doctor object we want to search
                                 */
                                for (var key in clinique.Doctors) {
                                    if (clinique.Doctors[key].Availability == i) {
                                        console.log("****Doctor's Info****");
                                        console.log(clinique.Doctors[key]);
                                    }
                                }
                            }
                        }
                        if (option2 == 2) {
                            console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");
                            var option4 = prompt('Enter option: ');
                            if (option4 == 1) {
                                var i = prompt('Name: ');
                                for (var key in clinique.Patients) {
                                    if (clinique.Patients[key].Name == i) {
                                        //show info of particular patient using name
                                        console.log("****Patients Info****");
                                        console.log(clinique.Patients[key]);
                                    }
                                }
                            }
                            else if (option4 == 2) {
                                var i = prompt('ID: ');
                                for (var key in clinique.Patients) {
                                    if (clinique.Patients[key].ID == i) {
                                        /**
                                         * show info of particular patient using ID
                                         */
                                        console.log("****Patients Info****");
                                        console.log(clinique.Patients[key]);
                                    }
                                }
                            }
                            else if (option4 == 3) {
                                var i = prompt('mobNo: ');
                                for (var key in clinique.Patients) {
                                    if (clinique.Patients[key].mobNo == i) {
                                        /**
                                         * show info of patient through mobile number
                                         */
                                        console.log("****Patients Info****");
                                        console.log(clinique.Patients[key]);
                                    }
                                }
                            }
                            else if (option4 == 4) {
                                var i = prompt('Age: ');
                                for (var key in clinique.Patients) {
                                    if (clinique.Patients[key].Age == i) {
                                        console.log("****Patients Info****");
                                        console.log(clinique.Patients[key]);
                                    }
                                }
                            }
                        }
                        break;
                    case 4:
                        console.log("ThankYou!");
                        break;
                    default:
                        console.log("Plz enter valid option!!");
                        break;
                }
            } while (option != 4);
            var array = [];
            array[0] = Name;
            array[1] = Appointed_To;
            return array;
        }
        catch (err) {
            throw ("error in clinique");
        }
        return array;
    };
    return clinique;
}());
exports.clinique = clinique;
/*var classAccess = new clinique();
classAccess.cliniqueFunction();
*/ 
