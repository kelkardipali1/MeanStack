var read = require('readline-sync');
module.exports = {
    isLeapYear(year) {
        
    // ensure year is of four digit
        
        //condition for checking leap 
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        else{
            return false;
        }
    },
    
    //condition for calculate the day, month and year
    day(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    },
}