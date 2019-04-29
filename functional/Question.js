
var Util=require('../Utility/util');
var read=require('readline-sync');

//console.log(");
var guess_num =read.question("guess a no between 0 to 127 ");
var powerOftwo = Math.pow(2, guess_num);
if(guess_num>=0){
console.log(powerOftwo);
console.log("guessed no is " + Util.find(powerOftwo));
}
else{
    console.log("cant guess number for negative number");
}
module.exports=guess_num;



    
    
