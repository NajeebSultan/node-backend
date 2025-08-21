const express = require("express");
const { HiH1 } = require("react-icons/hi2");
const app = express();

let port = 3000;  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hi i am a root path");
});

app.get("/:username/:id", (req, res) => {
  let  {username , id} = req.params;
  let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
  res.send(htmlStr);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  res.send(`<h1>You searched for ${q}</h1>`);
});




// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//   res.send("This path does not exist");
// });

// app.post("/", (req, res) => {
//   res.send("You made a POST request to the root path");
// });


// app.use((req , res) => {
//   console.log("Request received");
//   res.send("Hello, World!");

// }) ;