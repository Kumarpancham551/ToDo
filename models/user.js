const ToDo = require("./toDo");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    tasks: [{type:mongoose.Schema.ObjectId , ref: "ToDo"}]
});

module.exports =  mongoose.model("User", userSchema);