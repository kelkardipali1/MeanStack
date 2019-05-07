/******************************************************************************
 *  @Purpose        : Take an Arithmetic Expression such that parentheses are used 
                      to order the performance of operations.Ensure parentheses must 
                      appear in a balanced fashion.    
 *  @file           : balancedParenthesis.js
 *  @overview       : We will take an expression then if the brace opens we will push 
                      elements using stack and while closeing we will pop the elements 
                      then will check if the parantheses is balanced or not and return 
                      true or false.      
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 11-01-2019
 ******************************************************************************/
function balancedParenthesis() {
var balancedPara = require('./Utility/balancedParaCheckStack');

    try{
    var read = require('readline-sync');
    var expression=read.question('Enter the expression')
     //if expression is null then print an error message.
        if (expression == "") {
            console.log("plz enter an expression");
        } 
    //if expression is not null then get output  
        else if(expression != ""){
            balancedPara.balancedParenthesis(expression);
        }
    
    
        return expression;
    }
    catch(err){
        console.log("error");

    }
        
}

module.exports=balancedParenthesis();