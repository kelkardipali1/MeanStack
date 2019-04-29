
var ab=require('../Utility/util');
var read = require('readline-sync');

var num=read.questionInt("enter the size of array : ");
var arr=[" "];

for(var i=0; i < num; i++)
{
arr[i]=read.question("enter the element= ");
}
var low=0;
var high=arr.length;
function Merge(){

ab.mergeSort(arr);

console.log("Merge sorted result ",arr);
return num;
}
var c=Merge();
module.exports=c;
