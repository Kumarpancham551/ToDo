const todoController = require("../controllers/todoController");

module.exports = function(app){
    app.post("/todo/api/v1/task",todoController.createToDo);
    app.get("/todo/api/v1/task",todoController.getTask);
    app.patch("/todo/api/v1/task/:_id",todoController.updateToDo);
    app.delete("/todo/api/v1/task/:_id",todoController.deleteToDo);
}