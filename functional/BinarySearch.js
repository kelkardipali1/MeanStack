module.exports={
    binarysearch(lower,upper,middle,count,input,n){
        console.log("is your number",Math.floor(middle,0));
        var read=require('readline-sync');
        input=read.question("Enter your answer in 'yes' or 'high' or 'low'");
        while(lower<=upper){
            if(input=="yes"){
                lower=middle;
                break;
            }
            else if(input== "high"){
                console.log("the number thought was",middle);
                var no=count+1;
                console.log("it takes",no,"times to find your exact number");
            }
            else if(input =="low"){
                upper=Math.floor(middle,0);
                count++;
            }
            if(count<n){
                middle=Math.floor((lower+upper+1)/2,0);
                console.log("is your number",middle);
                input=read.question("Enter your answer in 'yes' or 'high' or 'low'");
            }
    
        }
        if(count>n){
            console.log("not found");
    
        }
    }
}