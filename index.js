const express = require("express")

const app = express()

// Here we import bodyparser
const bodyParser = require("body-parser")

// here we use .env config
require("dotenv").config()


// Now here we configer mongoose
const mongoose = require("mongoose")

// Here we bring courses router
const coursesRouter = require("./routes/courses")


// Here we use middleware to register all router of courses to index.js
app.use("/c", coursesRouter)

// hrer we use middleware to get body-parser
app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION_URL)
    console.log("Run Succrefully")

    



// app.get("/", (req,res) => {
//     console.log("Hello, our url is working propery")
// })


app.listen(process.env.PORT, () =>{
    console.log("server is running at port 2000..")
})