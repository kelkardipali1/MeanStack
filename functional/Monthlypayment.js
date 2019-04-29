var ab=require('../Utility/util');
var read=require('readline-sync');
var P=read.question("Enter the Principal")
  
  var Y=read.question("Enter the Year")
  
  var R=read.question("Enter the Rate")
  
  var MonthPayment=ab.MonthlyPayment(P,Y,R);
  //console.log("MonthlyPayment=",MonthPayment)
  module.exports=MonthPayment;