const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.get("/register", (req, res) => {
  res.send("standard GET response ");
});

app.post("/register", (req, res) => {
  res.send("standard POST response ");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});