//console.log(pal());
module.exports={
  pal(){
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
}
   /* var i;
    var j;
    var count
    var prime1=[];
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
       
      for(i=0;i<1000;i++){
        for(j=0;j<109;j++){
        if(prime1[i]==p[j] ){
          
          console.log(prime1[i]);
          
        }
      }
      }
    }*/
    

      

        
    


    
    
