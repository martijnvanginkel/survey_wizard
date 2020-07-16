const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const hostname = '127.0.0.1';
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
