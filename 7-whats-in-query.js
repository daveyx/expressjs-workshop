var express = require('express')
var app = express()
//console.log("port=" + process.argv[2])
app.get('/search', function(req, res) {
    //console.log(req.query);
    var query = req.query;
    res.send(query)
})
app.listen(process.argv[2])