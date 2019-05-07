/******************************************************************************
 *  @Purpose        : Add the Prime Numbers that are Anagram in the Range of 0-1000
                      in a Stack using the Linked List and Print the Anagrams in the
                      Reverse Order. 
 *  @file           : primeAnaStack.js
 *  @overview       : Here we have to display the Prime number with Anagram Numbers 
                      in reverse order using stack in a linked list.
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 4/05/2019
 ******************************************************************************/


var primeAnaStack=require('./Utility/primeAnaStackCheck')
var primeAna=require('./Utility/primeAnaCollect');
var read=require('readline-sync');
function printAnaprimes()
{
    var stackLink = new primeAnaStack.StackedLink;
    var anaPrimes = [[]];
    var initial=read.question("Enter the start value");
    var final=read.question("Enter the end values");
    if(initial<0){
        console.log('Stack is underflow')
    }
    
    else if(final>1000){
        console.log("stack is overflow");
    }
    else{
    anaPrimes = primeAna.findAnaPrime(initial,final);
    for(let i = 0 ; i < anaPrimes.length ; i++){
        stackLink.push(anaPrimes[i]);
    }
    console.log();
    console.log ("------Initial LinkList------");
    stackLink.display();
    var top =  stackLink.getHead();
    //console.log('top',top)
    
    console.log();
    console.log("------Reversed LinkList------");
    stackLink.displayReverse(top);
    
}
var array=[];
array[0]=initial;
array[1]=final;
array[2]=top;
array[3]=anaPrimes[0]
return array;

}
module.exports=printAnaprimes();