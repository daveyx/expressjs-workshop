var express = require('express')
var app = express()
app.put('/message/:NAME', function(req, res){
    var result = require('crypto')
                  .createHash('sha1')
                  .update(new Date().toDateString() + req.params.NAME)
                  .digest('hex')
    res.end(result)
    //res.send(result) //is the official solution
});
app.listen(process.argv[2])