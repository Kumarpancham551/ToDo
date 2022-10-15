const ToDo = require("../models/toDo")

const createToDo = async (req,res)=>{
    // creating post
    try{
        const data = {
            task : req.body.task,
            dueDate:req.body.dueDate,
            status:req.body.status
        }
     
        const post = await ToDo.create(data);
        res.status(201).send(post);
       }catch(err){
        console.log( err);
        res.status(500).send({
            message : "Internal server error while posting post"
        });
    }
}
const getTask = async (req,res)=>{

    try{
        var data;
        if(req.query.value){
            if(req.query.task){
                data = await ToDo.find({task:req.query.task});
            }
            if(req.query.status){
                data = await ToDo.find({status:req.query.status});
            }
            if(req.query.dueDate){
                data = await ToDo.find({dueDate:req.query.dueDate});
            }
        }else{
            data = await ToDo.find(); 
           }
    
        res.status(200).send(data);
       }catch(err){
        console.log( err);
        res.status(500).send({
            message : "Internal server error while getting task "
        });
    }
}
const updateToDo = async(req,res)=>{
    try{
    const idforUpdate = await ToDo.findOne({ "_id": req.params._id }); 
    idforUpdate.task = req.body.task != undefined ? req.body.task : idforUpdate.task;
    idforUpdate.dueDate = req.body.dueDate != undefined ? req.body.dueDate : idforUpdate.dueDate;
    idforUpdate.status = req.body.status != undefined ? req.body.status : idforUpdate.status;
    const updateData = await idforUpdate.save();
    res.status(201).send(updateData);
    }catch(err){
    console.log( err);
    res.status(500).send({
     message : "Internal server error while updating task"
    });
    }
}
const deleteToDo = async(req,res)=>{
    try{
  const {_id} = req.params;
  console.log(_id)
  await ToDo.findByIdAndDelete(_id);
  res.status(200).send({
    message:"Task successfully deleted"
  })
    }catch(err){
        console.log( err);
        res.status(500).send({
            message : "Internal server error while posting post"
        });
    }
}


const todoController = {
   createToDo,
   updateToDo,
   getTask,
   deleteToDo
};

module.exports = todoController;