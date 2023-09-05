const router = require("express").Router();
const Movie = require('../models/movieModels');

//add a movie

router.post('/add-movie',async (req,res)=>{
    try{
        const newMovie = new Movie(req.body);
        // console.log(newMovie)
        await newMovie.save();
        res.send({
            success:true,
            message:"Movie added"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//get all the movies
router.get('/get-all-movies', async(req,res)=>{
    try{
        const movies = await Movie.find();
        res.send({
            success:true,
            message:"All Movie Fetched",
            data:movies,
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//update a movie
router.put('/update-movie',async (req,res)=>{
    try{
        await Movie.findByIdAndUpdate(req.body.movieId,req.body);
        res.send({
            success:true,
            message:"Movie updated"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message,
        })
    }
})

//delete a movie

router.delete('/delete-movie',async (req,res)=>{
    try{
        await Movie.findByIdAndDelete(req.body.movieId);
        res.send({
            success:true,
            message:"Movie Deleted"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})



module.exports = router;