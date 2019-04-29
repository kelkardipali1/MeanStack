module.exports={
Prime(){
    var i;
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
         return prime1;
     }
    }       


    
