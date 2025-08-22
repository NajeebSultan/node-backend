const express = require('express');
const app = express();
const path = require("path");

let port = 8080;

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname , "/views")) ; 


app.get('/', (req, res) => {
  res.render("home.ejs");
});     

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  console.log(username);
});



app.get("hello", (req, res) => { 
  res.send("hello from express");
});

app.get("/rolldice", (req, res) => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs" ,  {randomNumber}  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});