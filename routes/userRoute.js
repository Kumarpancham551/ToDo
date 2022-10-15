const userController = require("../controllers/userController");

module.exports = function(app){
    app.post("/todo/api/v1/user/:_id",userController.createuser); 
    
}