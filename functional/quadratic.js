var ab=require('../Utility/util')
var read=require('readline-sync');
var a=read.question("Enter the a value\n");
var b=read.question("Enter the b value\n");
var c=read.question("Enter the c value\n");
var d=ab.realroot(a,b,c);
module.exports=d;
//module.exports=a,b,c;

