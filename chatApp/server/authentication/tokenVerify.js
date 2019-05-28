var jwt=require('jsonwebtoken');
var secret='secret';
try{
    exports.checkToken=(req,res,next)=>{
        console.log("In authentication");
        var token=req.params.token;
       console.log(req.params.token)
       Response={success:false,
        message:"token is not valid"}
    
    if(token){
        jwt.verify(token,secret,(err,decoded)=>{
            if(err){
                console.log(err)
                return res.status(401).send({Response});

            }
            else{
                console.log("Decoded data"+JSON.stringify(decoded));
                req.decoded=decoded;
                next();
        }

            
        });
    }
    else{
        return res.send({
            success:false,
            message:"token not provide"
        })
    }
}
}



catch(err){
    console.log("found error in generating token");

}