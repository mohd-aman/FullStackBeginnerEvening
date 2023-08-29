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

async function getCourse(){
    // const allCourses = await Course.find({});
    // console.log(allCourses);
    // const course = await Course.find({creator:"Joe"});
    // const course = await Course.find({rating:{$lt:4}})
    // console.log(course);
}

// getCourse();


async function updateCourse(id){
    const courseToUpdate = await Course.findById(id);
    console.log(courseToUpdate);
    if(!courseToUpdate){
        return;
    }
    courseToUpdate.name = "C++";
    courseToUpdate.creator = "Carey"
    const updatedCourse = await courseToUpdate.save();
}

// updateCourse("64ee2355832c88096e6d83b8");

async function deleteCourse(id){
   const deletedCourse =  await Course.findByIdAndDelete(id)
   console.log(deletedCourse)
}

// deleteCourse("64ee2379db2f85454465d82d");