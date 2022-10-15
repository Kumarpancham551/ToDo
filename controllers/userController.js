const User = require("../models/user")

const createuser = async (req,res)=>{
    // creating post
    try{
        const data = {
            name : req.body.name,
        
        }
       const post = await User.create(data);
       if(!post.tasks){
        post.tasks = [];
       }
       post.tasks.push(req.params);
       post.save()
        res.status(201).send(post);
       }catch(err){
        console.log( err);
        res.status(500).send({
            message : "Internal server error while posting post"
        });
    }
}
const userController = {
    createuser
 };
 
 module.exports = userController;