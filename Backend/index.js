const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();


app.get("/", (req, res) => {
    res.send("Hello world");
  });
  

const crudRouter = require('./src/routes/crud.route.js');

app.use('/crud',crudRouter);

  // app.listen(process.env.PORT || 4000, (error) => {
  //   if (error) throw error;
  //   console.log(`Server is running on port ${process.env.PORT}`);
  // });
  
  const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})
