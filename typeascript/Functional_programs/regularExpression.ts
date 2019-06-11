/******************************************************************************
 *  @Purpose        : For regular expression
 *  @file           : regularExpression.ts        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 *  @object_feature : Encapsulation,access modifires
 ******************************************************************************/
class regular {
    public regularExpression() {
        try {
            var prompt = require('prompt-sync')();
            /* Validates that a value matches a regular expression.
             * variables result1,result2,result3,fullname used to store final result
             */
            var result1, result2, result3, fullName, result4;
            /*
            * storing each string into a respective variables
            */
            var str = "-->Hello <<name>>,";
            var str3 = " We have your fullname as <<full name>> in our system."
            var str1 = "\n-->Your contact number is <<91­xxxxxxxxxx>>.";
            var str2 = "-->Thank you!! BridgeLabz <<dd-mm-yyyy>> ";
            /*
            * Using a regular expression literal,which consists of a pattern enclosed between slashes
            */
            var nameRestriction = /[a-z]/ig;
            var contactRestriction = /[0-9]/g;
            /*
            * asking user to enter a name & stored in name variable
            */

            var name = prompt("Please enter your name: ");


            /**
             * validating name number
             */
            if (nameRestriction.test(name) == false) {
                console.log("Invalid name!");
                return false;
            }
            else {
                result4 = str.replace(/<<name>>/, name);
            }

            /*
            * asking user to enter a fullname & stored in fullName variables
            */
            fullName = prompt("Please enter your full name: ");
            if (nameRestriction.test(fullName) && fullName.length > 3) {
                result1 = str3.replace(/<<full name>>/, fullName);
            }
            else {
                console.log("Invalid full name!");
                return false;
            }
            /* 
            * asking user to enter a contactNUmber & stored in contactNum
            */
            var contactNum = prompt("Please enter your contact number: ");
            if (contactRestriction.test(contactNum) == true && contactNum.length == 10) {
                result2 = str1.replace(/<<91­xxxxxxxxxx>>/, contactNum);
            }
            else {
                console.log("Invalid number!");
                return false;
            }
            /*
            * printing results getting from result1 and result2
            */
            console.log(result4 + " " + result1 + " " + result2);
            /*
            * uses Date function for getting date,month and year
            */
            var d = new Date();
            var date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            result3 = str2.replace(/<<dd-mm-yyyy>>/, date);
            console.log(result3);
        }

        catch (err) {
            throw ("Error")
        }


    }

}
var regularClass = new regular();
regularClass.regularExpression();