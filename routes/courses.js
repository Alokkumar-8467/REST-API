const express = require("express")

const {route} = require("express/lib/application")

// Here we import our Course model from model.
const Course = require("../models/course") 

const router = express.Router()




// this is for getting all courses

router.get("/courses", async (req,res) => {
    try {
        const courses = await Course.find()
    res.json(courses)
    } catch (error) {
        res.json(err);
    }
    
    
})

// get single course

router.get("/:courseId", async (req, res) => {
    const courseId = req.params.courseId

    try {
        const course = await Course.findById(courseId)
        res.json(course)
    } catch (error) {
        res.json(err);
    }
       
    
})

// create courses

router.post("/", async (req,res) => {
    
        const course = await Course.create(req.body)
        res.json(course);
    
})


// delete course





module.exports = router;