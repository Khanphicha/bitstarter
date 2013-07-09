var express = require('express');

var fs = require('fs');

var buffer = "";

fs.readFile('index.html', function (err, data) {

  if (err) throw err;

  buffer = data.toString();

});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  response.send(buffer);

});
