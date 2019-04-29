
    module.exports={
//Anagram.js
    anagram(){
    try{
    //var str1="abcd";
    //var str2="abdh";
    var read=require('readline-sync');
    var str1=read.question("Enter the string 1");
    var str2=read.question("Enter the string 2");
    var n1=str1.length;
    var n2=str2.length;
    var flag=0
    if(n1!=n2){
        console.log("strings are not anagram\n");
         
    }
    else{
        var str3=str1.split("")
        var str4=str2.split("")
        str3.sort();
        str4.sort();
        for(i=0;i<n1;i++){
        if(str3[i]==str4[i]){
            flag=1
        }
        else{
            flag=0
        }
    }
    
    if(flag==1){
        console.log("Angram");
    }
    else{
        console.log("not anagram");
    }
}
    }
    catch(err){
        console.log(err);
    }
    return n1;
},
//Distance.js
distance(){
    try{
    var read=require('readline-sync');
var x=read.question("Enter the x");
var y=read.question("Enter the y");


    var x1=Math.pow(x,x)
    var y1=Math.pow(y,y)
    var distance=Math.sqrt(x1+y1);
    console.log("Euclidean distance=",distance);
    return x;
    }
    catch(err){
        console.log(err);
    }
},
//gambler.js
Gambler(){
    try{
    var read=require('readline-sync');
var stake=read.question("Enter the amount you have\n");
var goal=read.question("Enter the goal i.e ur expected amount that you will win\n");
var trials=read.question("Enter number of times u want to do bets\n");
    

    var bets = 0;
    var wins = 0;
    for (var counter = 0; counter < trials; counter++) {
    
    var cash = stake;
    while (cash > 0 && cash < goal) {
    bets++;
    // console.log(bets);
    
    if (Math.floor(Math.random() < 0.5)) {
    cash++;
    }
    else {
    cash--;
    }
    }
    if (cash == goal)
    wins++;
    }
    
    var winPercent = (100.0 * (wins / trials));
    console.log(wins + " wins of ", + trials, " trials");
    console.log("avg bets = ", + 1.0 * (bets / trials));
    console.log("Percent of games won = ", + 100.0 * (wins / trials));
    console.log("percentage of loss = ", + (100 - winPercent));
}
catch(err){
    console.log(err);
}
    
    },
    
//quadratic.js
realroot(a,b,c){
    try{
    
    var delta=((b*b)-(4*a*c));
    var z=parseInt(Math.sqrt(delta));
    //console.log(z);
    var root1=((-b+(z))/(2*a));
    var root2=(-b-(z))/(2*a);
    console.log("Root1=",root1,"\n","Root2=",root2);
    console.log(delta)
    return delta;
    }
    catch(err){
        console.log(err);
    }
},
//stopwatch.js
elapsed(start,end){
    try{
    var elapsedTime=end-start;
    console.log("ElapsedTime=",elapsedTime);
    }
    catch(err){
        console.log(err);
    }
},
//leap.js
leap() {
    try{
var read=require('readline-sync');
var year=parseInt(read.question("Enter the year"));
//var year=2000;
    
var count=0;  
//var n=year;
//console.log(leap());

    if((year%4==0)&& (year%100!=0)||(year%400==0)){
        console.log("Entered year is leap")
    }
    else{
        console.log("Entered year is not leap year")
    }
  return year;
}
catch(err){
    console.log(err);
}
},
//harmonic.js
harmonic(){
    try{
    var read=require('readline-sync');
    var n=parseInt(read.question("Enter the n value for harmonic series\n"));
    if(n<0 ||n==0){
      console.log("harmonic series not possible")
   }
   else{
      var sum=0;
      var i;
      console.log("harmonic series\n");
      for (i=1;i<=n;i++){
          sum=sum+1/i
          if (i<n){
      
          console.log("1/",i)
          //console.log(" ")
          console.log("+")
        }
        if (i==n){
          console.log("1/",i)
        }
      
      
      }
    
      console.log("=",sum)
    }
    return n;
}
catch(err){
    console.log(err);
}
  
  },
replace1(){
    try{
    var read= require('readline-sync');
    var str1="hello username";
    var str2="username";
     /*var pattern=/[a-z]/gi;
     if (str1.match(pattern)){
        console.log(replace1())
    }*/
    

   console.log("Input string is",str1);
    
    var str3;
    str3=read.question('Enter the string');
    if(str3.length>=3){
        var str4=str1.replace(str2,str3);
        console.log(str4);
    }
    else{
        console.log("Enter min 3 character");
    }
    return str3;
}
catch(err){
    console.log(err);
}



},
//PrimeAndPal.js
pal(){
    try{
    var i=1;
    var temp;
    var reverse_num;
    var rem;
    var b=[];
    var p=[];
    for(i=0;i<1000;i++){
        b.push(i);
        temp=b[i]
      reverse_num=0


      while (temp>=1){
        rem=parseInt(temp%10);
         temp=parseInt(temp/10);
         reverse_num=reverse_num*10+rem;

      }
      if (reverse_num==b[i]){
        
      p.push(b[i]);
      
}
    }
    return p;
}
catch(err){
    console.log(err);
}
  },
//PrimeAndPal.js
Prime(){
    try{
    var i;
    var j;
    var count
    var prime1=[];
    //var high=1000
    for(i=0;i<1000;i++){
        count=0;
        for(j=2;j<=i/2;j++){
            if (i%j==0){
                count++;
             break;
         }
         }
         if (count == 0 && i!= 1 ){
           prime1.push(i);
         
         }
       }
         return prime1;
    }
    catch(err){
        console.log(err);
    }
     },
//PrimeAndPal.js
PrimeAndPal(){
    try{
        var x=require('../functional/prime');
        var y=require('../functional/palindrome');
        var s=x.Prime();
        var t=y.pal();
        var q=[];
        var read=require('readline-sync')
        var high=read.question("Enter the high size");

        if(high<=1000){
        
        var i;
            for(i=1;i<high;i++){
            for (j=1;j<t.length;j++)
            if(s[i]==t[j]){
                q.push(s[i]);
            } }
        
        console.log(q);
        }
        else{
            console.log("Input size between 0 to 1000");
        }
        return high;
    }
    catch(err){
        console.log(err);
    }
            
        },
//InsertionSort.js
Insertion(){
    try{
    var read=require('readline-sync')
    var len=parseInt(read.question("Enter the size"));


    var arr=[" "];
    for(var i=0;i<len;i++){
        arr[i]=read.question("ENter the string elements");
    }
    var count=0;
    var temp=[""];
    
    var i;
    var j;
    for(i=0;i<len;i++){
        for(j=i+1;j<len;j++){
            if(arr[i].localeCompare(arr[j])>0){
                temp = arr[i];
                arr[i]=arr[j];
                 arr[j]=temp
            }
        }
    
    }
    for(i=0;i<len;i++){
    console.log(arr[i]);
    }
    return len;
}
catch(err){
    console.log(err);
}
    },
question(){
    try{
        var max ;
        var count ;
        
        var lower ;
        var upper ;
        var middle ;
        var input;
        var n;
        var read=require('readline-sync');
        var n=read.question("Enter any number");
        //console.log("Number should be power of two");
        max=Math.pow(2,(n-1));
        count=0;
        input=" ";
        lower=0;
        upper=max;
        middle=Math.floor(lower+upper/2,0);
        var c=require('../functional/BinarySearch');
        c.binarysearch(lower,upper,middle,count,input,n);
        //return lower,upper,middle,count,input,n;
    }
    catch(err){
        console.log(err);
    }

        
        
        },
DayOfWeek(){
    try{
         var read=require('readline-sync')
         var d=read.question("Enter the day");

        var m=read.question("Enter the month")

       
        var y=read.question("Enter the year")
            var y0 = y - (14 - m) / 12;
		var x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
		var m0 = m + 12 * ((14 - m) / 12) - 2;
		var d0 = (d + x + (31 * m0) / 12) % 7;
        var Result=d0;
        Result=Math.floor(Result,0);
//console.log(Result);
           if(Result==0){

            console.log("Sunday")
         }
         else if(Result==1){
           console.log("Monday")
       }
         else if(Result==2){
          console.log("Tuesday")
       }
        else if(Result==3){
            console.log("Wed")
       }
         else if(Result==4){
            console.log("Thu")
      }
        else if(Result==5){
            console.log("Fri")
      }
         else if(Result==6){
            console.log("sat")
      }
        else{
         console.log("Wrong")
           }
 return Result;
        }
        catch(err){
            console.log(err);
        }

          
},
MonthlyPayment(P,Y,R){
    try{
            var r=(R/(12*100))
            var n=(12*Y)
            var x=(Math.pow((1+r),(-n)))
            var Payment=(P*r)/((1-x))
          console.log("Monthly Payment=",Payment);
          return Payment;
    }
    catch(err){
        console.log(err);
    }
          
          },
Binary1(){
    try{
    var read=require('readline-sync');
    var n=parseInt(read.question("Enter the number for conversion"));
    var n1=n
    var BinaryNum=[];
    var i=0;
    var j;
    while(n>0){
     var p=n%2;
        BinaryNum[i]=Math.floor(p,0);
        n=n/2;
        i++
        
    }
    BinaryNum.length=8;
    //console.log("i=",i)
     var s="";
    for(j=8-1;j>=0;j--){
        //console.log(BinaryNum[j]+" ");
    s+=BinaryNum[j]+" ";
    }
    console.log(s)
console.log(n1);
    return n1;
}
catch(err){
    console.log(err);
}
},
TwoDArray(){
    try{
    var arr=[];
    var read=require('readline-sync');
    var size=read.question("Enter the size");
    ;
    for(var i=0;i<size;i++){
        var ele=read.question("ENter the elements")
        ele=parseInt(ele)
        arr.push(ele)
    }
    var newArray=[];
    while(arr.length) newArray.push(arr.splice(0,2));
    console.log(newArray);
    return  size;
}
catch(err){
    console.log(err);
}
},
merge(arr, brr, crr) {
    try{
    var i = 0; var j = 0;
    var k = 0;
    while (i < arr.length && j < brr.length) {
    if (arr[i] <= brr[j]) {
    crr[k] = arr[i]
    i++;
    }
    else {
    crr[k] = brr[j];
    j++;
    }
    k++;
    }
    while (i < arr.length) {
    crr[k] = arr[i];
    i++;
    k++;
    }
    while (j < brr.length) {
    crr[k] = brr[j];
    j++;
    k++;
    }
    return crr;
}
catch(err){
    console.log(err);
}
    },
    mergeSort(res) {
        try{
        var n = res.length;
        if (n < 2) {
        return;
        }
        var mid = Math.floor(n / 2);
        var left = [mid];
        var right = [n - mid];
        for (let i = 0; i < mid; i++) {
        left[i] = res[i];
        }
        for (let j = mid; j < n; j++) {
        right[j - mid] = res[j];
        }
        this.mergeSort(left);
        this.mergeSort(right);
        this.merge(left, right, res);
    }
    catch(err){
        console.log(err);
    }
        
        },
        find( powerOftwo) {
            try{

            var read=require('readline-sync')
            var low = 0, high = powerOftwo-1 , mid;
            while (low != high) {
            mid =Math.floor((low + high) / 2);
            //console.log(");
            var answer = read.question(" \nEnter 1 if no is between " + low + " - " + mid +
            "\n Enter 2 if no is between " + (mid + 1) + " - " + high);
            mid = Math.floor((low + high) / 2);
            if (answer == 1)
            high = mid;
            else
            low = mid + 1;
            }
            return low;
        }catch(err){
            console.log(err);
        }
            }
        



        
    


    
}