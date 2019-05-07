/******************************************************************************
 *  @Purpose        : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
                      the prime numbers in a 2D Array, the first dimension represents the range 0-100,
                      100-200, and so on. While the second dimension represents the prime numbers in
                      that range   
 *  @file           : prime2D.js
 *  @overview       : Here we have to print the given range of prime numbers in 2D Array.     
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 3/05/2019
 ******************************************************************************/

function prime(){
var read=require('readline-sync') ;  
var Prime=require('./Utility/primeChecker');
var show = require('util');
var primes = [[],[],[],[],[],[],[],[],[],[]];
var initial = 0;
var final = 100;
let index=read.question('Enter the initial value');


//This condition calculates the initial to final value range
try{

if(index==-1 || index>10){
    console.log("prime numbers not calculated for this range");
}
else{
console.log('--Prime Numbers in the given range are :--\n');
for(;index < 10 ;index++){
    primes[index] = Prime.checkPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;

//This condition checks the prime number range from starting to ending values 

for(let index1=0; index1<10 ; index1++){
    show.print("[" + "[" +start+ "-" +end+ "]" + " " + "[" + primes[index1] + "]" + "]");
    start = start + 100;
    end = end + 100;
    console.log();
}
}}
catch(err){
    console.log('error');
}
var array=[];
array[0]=index;
return array;
}
module.exports=prime();
