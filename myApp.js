let express = require('express');
let app = express();

// Just log to the console
console.log("Hello World");

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;