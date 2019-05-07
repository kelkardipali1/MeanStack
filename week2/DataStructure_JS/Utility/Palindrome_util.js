function deQueue(){
    this.string=new Array();
    
    //remove the item from back
    
    this.popback=function(){
        return this.string.pop();
    }
    
    //add the item into back
    
    this.pushback=function(item){
        return this.string.push(item);
    }
    
    //remove the item from front
    
    this.popfront=function(){
        return this.string.shift();
    }
    
  //add the item into front
    
    this.pushfront=function(item){
        return this.string.unshift(item);
}
this.printQueue=function(){
    var str='';
    for(var i=0;i<this.string.length;i++){
        str+=this.string[i]+" ";
    }
    return str;
}

//returns the length of deQueue

this.size=function(){
    return this.string.length;
}
}
module.exports={
    Palindrome(str){
        
        //create a new deque. 
        
        var deque=new deQueue();
        var array=[];
        array=str.split('');
        for(var i=0;i<array.length;i++){
            deque.pushback(array[i]);
        }
        console.log(deque.printQueue());
        var flag=true;
        while(deque.size()>1){
                var a=deque.popfront();
                var b=deque.popback();
                if(a!=b){
                    flag=false;
                }
            }
    
        
        //if the strings are equal returns this statements
        
        if(flag==true){
            console.log("Palindrome");
        }
        else{
            console.log("Not a Palindrome");
        }
        //return str;
    },
    

}
