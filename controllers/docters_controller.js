const Docter=require('../models/docter');

// using json web token to send the token to browser
const jwt=require('jsonwebtoken');

// registering the docter
module.exports.register= async function(req,res){
    try{
        if(req.body.password!=req.body.confirm_password){
            return res.json(200,{
                message:"Password not same"
            });
        }
        const user=await Docter.findOne({email:req.body.email});
        if(!user){
            await Docter.create(req.body);
            return res.json(200,{
                message:"Registration Successful",
                data:req.body
            });
    
        }else{
            return res.json(200,{
                message:"Docter already registered",
                data:req.body
            });
        }
    }catch{
        return res.json('200',{
            message:"error in registering docter"
        })
    }
    
}

// docter login 
module.exports.login= async function(req,res){
    try{
        let docter=await Docter.findOne({email:req.body.email});
        if(!docter || docter.password!=req.body.password){
            return res.json('422',{
                message:"Invalid password/email",
                data:req.body
            })
        }else{
            return res.json(200,{
                message:"Sign in successful",
                data:{

                    // sending the token with the help of jsonwebroken for authentication purpose
                    token:jwt.sign(docter.toJSON(),'docter',{expiresIn:'1000000'})
                }
            })
        }
    }catch{
        return res.json('200',{
            message:"error in logging in"
        })
    }
    

}