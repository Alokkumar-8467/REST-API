const mongoose = require("mongoose")

// Now here we made schema or model for our mongobd
const Course = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    videos:{
        type:String,
        require:true
    },
    active:Boolean
})


// Here we export out model and schema.
module.exports = mongoose.model("courses",Course)