const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const Theatre = require('../models/theatreModels');

//add a theatre
router.post('/add-theatre',authMiddleware,async(req,res)=>{
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success:true,
            message:"Theatre Added"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})



module.exports = router;