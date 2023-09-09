const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const Theatre = require('../models/theatreModels');
const Show = require('../models/showModel');

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


//get theatre owner specific
router.post('/get-all-theatre-by-owner', authMiddleware,async (req,res)=>{
    try{
        const theatres = await Theatre.find({owner:req.body.owner})
        res.send({
            success:true,
            message:"Theatre added",
            data:theatres
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//update theatre 

router.put("/update-theatre",authMiddleware ,async(req,res)=>{
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId,req.body);
        res.send({
            success:true,
            message:"Theatre updated"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//delete a theatre
router.post('/delete-theatre', authMiddleware,async (req,res)=>{
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId)
        res.send({
            success:true,
            message:"Theatre Deleted"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//get all theatre route
router.get('/get-all-theatres',authMiddleware, async(req,res)=>{
    try{
        const theatres = await Theatre.find().populate('owner');
        res.send({
            success:true,
            message:"Theatres fetched",
            data:theatres
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//add a Show
router.post('/add-show',authMiddleware,async(req,res)=>{
    try{
        const newShow = new Show(req.body);
        await newShow.save();
        res.send({
            success:true,
            message:"Show Added"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})


module.exports = router;