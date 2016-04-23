var express = require("express");
var http = require("http");
var app = express();

app.all("*", function(request, response, next) {
   response.writeHead(200, {"Content-type": "text/plain"});
   next();
});

app.get("/", function(request, response) {
    response.end("Welcome to Home page!");
});

app.get("/about", function(request, response) {
    response.end("Welcome to About page!");
});

app.get("*", function(request, response) {
    response.end("404! page not found");
});

http.createServer(app).listen(1337, "localhost");