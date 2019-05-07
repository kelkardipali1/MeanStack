/******************************************************************************
 *  @Purpose        : A palindrome is a string that reads the same forward and backward,
                      forexample,radar,toot,and madam. We would like to construct an 
                      algorithm to input a string of characters and check whether it is a 
                      palindrome.    
 *  @file           : Palindrome.js
 *  @overview       : we will take dequeue here to check a string of character from left to 
                      right and then pop the characters from front and rear and if it matches 
                      then its a pallindrome otherwise its not a pallindrome.    
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 2/05/2019
 ******************************************************************************/
function palindromeCheck(){
    var util=require('./Utility/Palindrome_util')
    //var a;
    // read the input from user
    var read=require('readline-sync');
    var str=read.question('Enter the string');
    if(str>='a' && str<='z' || str>='A' && str<='Z'){
         var test=util.Palindrome(str);
    }
    //check if the string is null
    else if(str==''){
        console.log("please Enter the string");
    }
    //check the string is character string or not and if not print error 
    else{
        console.log("Enter the character string only");
    }
    return str;

}
var string=palindromeCheck();
module.exports=string
