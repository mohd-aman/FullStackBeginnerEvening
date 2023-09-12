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

//get shows based on theatres

router.post('/get-all-shows-by-theatre',authMiddleware,async(req,res)=>{
    try{
        const shows = await Show.find({theatre:req.body.theatreId}).populate('movie');
        res.send({
            success:true,
            message:"Shows Fetched",
            data:shows
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//delete a show
router.post('/delete-show',authMiddleware,async (req,res)=>{
    try{
        await Show.findByIdAndDelete(req.body.showId);
        res.send({
            success:true,
            message:"Show Deleted"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})


//get all unique theatres which have shows of a movie
router.post('/get-all-theatres-by-movie',authMiddleware,async(req,res)=>{
    try{
        const {movie,date} = req.body;
        //find all the shows of a movie on given date
        const shows = await Show.find({movie,date}).populate('theatre');
        //get all unique theatres
        let uniqueTheatre = [];
        shows.forEach((show)=>{
            console.log(show);
            const theatre = uniqueTheatre.find(
                (theatre)=> theatre._id == show.theatre._id
            )
            // console.log(theatre);
            if(!theatre){
                const showsForThisTheatre = shows.filter(
                    (showObj)=>showObj.theatre._id == show.theatre._id
                )
                uniqueTheatre.push({
                    ...show.theatre._doc,
                    shows:showsForThisTheatre
                });
            }
        })
        res.send({
            success:true,
            message:"Unique Data Fetched",
            data:uniqueTheatre
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})


//get show by id
router.post('/get-show-by-id',authMiddleware,async(req,res)=>{
    try{
        const show = await Show.findById(req.body.showId)
        .populate("movie")
        .populate("theatre")
        res.send({
            success:true,
            message:"Show fetched",
            data:show,
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})
module.exports = router;