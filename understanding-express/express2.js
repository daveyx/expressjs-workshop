var express = require("express");
var logger = require("morgan");
var http = require("http");
var app = express();

app.use(logger());
// Fun fact: logger() returns a function.

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello world!\n");
});
// Start it up!
http.createServer(app).listen(8080);