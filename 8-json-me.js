var express = require('express')
var app = express()
app.get('/books', function(req, res){
    require('fs').readFile(process.argv[3], "utf8", function(err, data) {
        if (err) {
            console.log("error reading file " + process.argv[3])
            return err;
        }
        var object = JSON.parse(data)
        res.json(object)
    });
});
app.listen(process.argv[2])


/* official solution uses try-catch and send res.send(500) if read file fails

    var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])

*/