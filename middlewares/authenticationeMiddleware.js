
const jwt = require("jsonwebtoken")

const authorise = (req,res,next) =>{

    // const token = req.cookies.cookie_token; //previou
    const token = req.cookies.cookie_token;
    console.log("token",token);
    
    if(token){
        try{
            const decoded = jwt.verify(token,"key");
            console.log(decoded.userId,"from middleware");
            req.body.userId = decoded.userId;
            next();
        }
        catch(err){
            res.status(401).send({success:false,message:'not authorise,please login first decoded'});
        }
    }
    else{
        res.status(401).send({success:false,mesage:"You are not authorize please login, error in token"});
    }
}


module.exports={
    authorise
}

