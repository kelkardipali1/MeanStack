var ab=require('../Utility/util')
var read=require('readline-sync');
var n=read.question("Enter 1 for start time\n");
var d=new Date();
var start=d.getTime();
var m=read.question("Enter 2 for end time\n");
var d1=new Date();
var end=d1.getTime();
console.log("startTime=",start);
console.log("endTime=",end)
//var end=m.getTime();
ab.elapsed(start,end);
