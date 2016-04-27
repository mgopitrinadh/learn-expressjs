var express = require("express");
var fs = require("fs");

var app = express();
app.get('/books', function(req, res) {
    var fileName = process.argv[3];
    fs.readFile(fileName, function(e, data) {
        if(e) return res.sendStatus(500);
        try {
            var books =JSON.parse(data);
        } catch (e) {
            res.sendStatus(500);
        }
        res.json(books);
    });
});

app.listen(process.argv[2]);
