var express = require('express');
var app = express();

// Build Your Route Here
app.get('/', function(req, resp) {

  resp.render('index', { welcomePhrase: 'Hello, World from Express and EJS!' });
  const welcomePhrase("Hellow, World from Express and EJS!")
  resp.render('index.ejs');

});

module.exports = app;
