/******************************************************************************
 *  @Purpose        : Read the Text from a file, split it into words and arrange it as Linked List.
                      Take a user input to search a Word in the List. If the Word is not found then add it
                      to the list, and if it found then remove the word from the List. In the end save the
                      list into a file.  
 *  @file           : unorederedLinkedList.js
 *  @overview       : We read a string from file then perform linked list operations and then we search 
                      elements from list if it is available then delete and if not available then add it.     
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 4/05/2019
 ******************************************************************************/

var unorderedlist=require('./Utility/unorderLinked');
var data = fileSystem.readFileSync('/home/user/Desktop/mochatest/DataStructure_JS/file.txt');
console.log("String read from file: \n\n"+data);
data= data.toString().toLocaleLowerCase( ).split(' ');
var data1=data
function unorderedList(){
    // here we read the input from user that input function stored in utility.
    var read=require('readline-sync')
    var element=read.question('Enter the element to search');
     //Validating the element which should not accept any integer value.
        
        if(element>='a' && element<='z'||element>='A' && element<='Z'){
            unorderedlist.unorderedList(data,element); 
        }
        else{
            console.log("plz enter a string...");
        }
        var array=[];
       
        array[0]=element;
        return array;
 }
module.exports=unorderedList();