const express = require('express');
const app = express();
const path = require("path");

let port = 8080;

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname , "/views")) ; 


app.get('/', (req, res) => {
  res.render("home.ejs");
});     

app.get("/ig/:username", (req, res) => {
  

  const instaData = require("./data.json");
  let { username } = req.params;
  const data = instaData[username];
  res.render("instagram.ejs", { data });
});



app.get("/hello", (req, res) => { 
  res.send("hello from express");
});

app.get("/rolldice", (req, res) => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs" ,  {randomNumber}  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});