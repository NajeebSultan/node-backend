const express = require('express');
const app = express();

let port = 8080;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.send('hi i am a root path');
}); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});