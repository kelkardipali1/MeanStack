/******************************************************************************
 *  @Purpose        : Write a program Calendar.java that takes the month and year as command-line
                      arguments and prints the Calendar of the month. Store the Calendar in an 2D Array,
                      the first dimension the week of the month and the second dimension stores the day
                      of the week.
 *  @overview       : Store the Calendar in an 2D Array,the first dimension the week of 
                      the month and the second dimension stores the day of the week.
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 3/05/2019
 ******************************************************************************/

var calendar = require('../DataStructure_JS/Utility/calender');
var show = require('util');

//it will prints the month

var months = [
    "",
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

//days[i] = number of days in month i

var days = [
    0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];
try {
    var month = + process.argv[2];
    var year = + process.argv[3];
    var newMonth = parseInt(month);
    var newYear = parseInt(year);

    if (newMonth < 1 || newMonth > 12) throw "Month value is Invalid , Please Enter a value in range 1-12"
    if (newMonth == undefined || newYear == undefined) throw "No input found"
    if (isNaN(newMonth) || isNaN(newYear)) throw "No input or String found , Please Enter a value in range 1-12";
    if (newMonth % 1 != 0 || newYear % 1 != 0) throw "Number required , Floating value found"
    
    //check for leap year
    
    if (newMonth == 2 && calendar.isLeapYear(newYear)) days[newMonth] = 29;
    console.log("   " + months[newMonth] + " " + year);
    console.log(" S  M Tu  W Th  F  S");
    
    //starting day
    
    var day = calendar.day(newMonth, 1, newYear);
    
    //print the calendar
  
   for (let i = 0; i < day; i++) {
    show.print("   ");
}
for (var i = 1; i <= days[newMonth]; i++) {
    show.print(" ", i);
    if (i < 10){
        show.print(" ");
    }
    if (((i + day) % 7 == 0) || (i == days[newMonth])) {
        console.log(" ");
    }
}
} catch (err) {
    console.log("Error: " + err);
}