var express = require('express')
var app = express()
//console.log("port=" + process.argv[2])
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(process.argv[2])
//app.listen(8080)