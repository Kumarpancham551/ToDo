const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required: true
    },
    dueDate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"Pending",
        enum:["Pending","Completed"]
    },

});

module.exports =  mongoose.model("ToDo", todoSchema);