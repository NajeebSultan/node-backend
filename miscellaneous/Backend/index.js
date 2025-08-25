const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.get("/register", (req, res) => {
  let { user , password} = req.query;
  res.send(`standard GET response . Welcomm ${user}`);
});

app.post("/register", (req, res) => {
    let { user , password} = req.query;
  res.send(`standard POST response  Welcomm ${user}`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});