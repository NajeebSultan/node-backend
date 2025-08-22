const express = require('express');
const app = express();
const path = require("path");

let port = 8080;

app.set('view engine', 'ejs');
app.set("views",Path.join(__dirname , "/views")) ; 


app.get('/', (req, res) => {
  res.render("home.ejs");
});     

app.get("hello", (req, res) => { 
  res.send("hello from express");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});