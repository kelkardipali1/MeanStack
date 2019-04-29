//var ab=require('../Utility/util');
//console.log(leap());
//var read=require('readline-sync');

//var year =read.question('Enter the year');

//ab.leap(year);
/*function leap() {
    var year=2000000;
//var count=0;  
//var n=year;
//console.log(leap());

    if((year%4==0)&& (year%100!=0)||(year%400==0)){
        console.log("Entered year is leap")
    }
    else{
        console.log("Entered year is not leap year")
    }
  return year;
}


//module.exports=year;
module.exports=leap();
*/
var ab=require('../Utility/util');

var n=ab.leap();
module.exports=n;

