const mongoose = require("mongoose")

const password = 'MB1vRySNPUvjt0qN';

const db = `mongodb+srv://saifiamaan445:${password}@cluster0.closkjt.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db)
.then(()=>{
    console.log("Connection Established")
}).catch((error)=>{
    console.log(error);
})

//Schema
const courseSchema = new mongoose.Schema({
    name:String,
    creator:String,
    rating:Number,
    isPublished:Boolean,
    publishedDate:{type:Date, default:Date.now}
})

//Model
const Course = mongoose.model('Course',courseSchema);

//CRUD

async function createCourse(){
    const course = new Course({
        name:"Scala",
        creator:"Alex",
        rating:3.5,
        isPublished:true
    })
    const courseCreated = await course.save();
    console.log(courseCreated);
}

// createCourse();