const express = require('express');
const app = express();
const mongoose = require("mongoose");
const  dbConfig = require("./configs/dbConfig");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error",()=>{
   console.log("Error while connecting to MongoDB");
});
db.once("open",()=>{
   console.log("Connected to mongoDB");
  // init();
  
})
require("./routes/todoRoute")(app);
require("./routes/userRoute")(app);

const PORT = process.env.PORT ||8080;
app.listen(PORT,()=>{
    console.log("server running on port ",PORT);
})