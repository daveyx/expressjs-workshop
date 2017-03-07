var express = require("express");
var logger = require("morgan");
var http = require("http");
var app = express();

var express = require("express");
var app = express();

// Set the view directory to /views
app.set("views", __dirname + "/views");

// Let's use the Pug templating language
app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index", { message: "I love anime" });
});

// Start it up!
http.createServer(app).listen(8080);