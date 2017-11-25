var express = require('express');
var app = express();

// Build Your Route Here
app.get('/', function(req, resp) {
<<<<<<< HEAD
  resp.render('index', { welcomePhrase: 'Hello, World from Express and EJS!' });
=======
  const welcomePhrase("Hellow, World from Express and EJS!")
  resp.render('index.ejs');
>>>>>>> 48eaee82e7340e9920e2df5e8e37b0c76b6403c4
});

module.exports = app;
