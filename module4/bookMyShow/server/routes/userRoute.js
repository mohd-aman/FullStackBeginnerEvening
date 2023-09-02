const router = require("express").Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

router.post('/register',async (req,res)=>{
    try{
    const userExists = await User.findOne({email:req.body.email});
    if(userExists){
        return res.send({
            success:false,
            message:"User Already Exists"
        })
    }

    //hashed the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    req.body.password = hashedPassword;

    const newUser = await User(req.body)
    console.log(newUser);
    await newUser.save();
    res.send({
        success:true,
        message:"User Registered, Please login"
    });
    }catch(err){
        console.log(err);
    }
})

router.post('/login',async (req,res)=>{
    const user = await User.findOne({email:req.body.email})
    if(!user){
        return res.send({
            success:false,
            message:"User does not exists"
        })
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!validPassword){
        return res.send({
            success:false,
            message:"Invalid Passowrd"
        })
    }
    const token = jwt.sign({userId:user._id},process.env.secret_key_jwt,{expiresIn:'1d'});
    // console.log(token);
    res.send({
        success:true,
        message:"User Logged In",
        token:token
    })

})


router.get("/get-current-user", authMiddleware, async (req,res)=>{
    const user = await User.findById(req.body.userId).select('-password')
    res.send({
        success:true,
        message:"You are allowed to go to protected route",
        data:user
    })
})

module.exports = router;