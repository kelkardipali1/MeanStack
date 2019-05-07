class Stack{
    
    //create a new constructor to create object of item.
    constructor(){
        this.items=[];
        this.top;
    }
   //push elements into the stack.
    push1(element){
        //this.items.push(element);
        if(this.top>=(this.items.length-1)){
            console.log("Stack overflow");

        }
        else{
            this.items[this.top++]=element;
        }
    }
    //pop elements from the stack.
    pop(){
    
    //if there is no element in stack and we perform pop then it get underflow.
         
        if(this.items.length==0)
           return "Underflow";
        var element1=this.items[this.top--];
        return element1;
    }
    peek(){
        
    //it will return top element of stack without removing it.
        
        return this.items[this.items.length-1];
    }
    isEmpty(){
        
    //checks if stack is empty are not
    
        return this.items.length==0;
    }
    size(){
        return this.items.length;
    }
    printStack(){
        
    //print stack 
        
        var str="";
        for(var i=0;i<this.items.length;i++){
            str+=this.items[i]+"";
        }
            return str; 
    }
}

module.exports={
    balancedParenthesis(expression){
    
    // create a new stack. 
        
        var stack=new Stack();
        var count=0;
        var counter=0;
        //var top=expression.length-1;
        
        for(var i=0;i<expression.length;i++){
            
             //if paranthesis opens it will perform push operation. 
            
            if(expression[i]=="("){
                stack.push1(expression[i]);
                count++;
            }
            
        //while closing paranthesis it will perform pop opeartion. 
            
            else if(expression[i]==")"){
                stack.pop();
                counter++;
            }
        }
        if(count==counter){
            console.log("True"+"\n"+"Arithmetic expression is balanced");
        }
        else{
            console.log("False"+"\n"+"Arithmetic expression is not balanced");
        }
    }
}