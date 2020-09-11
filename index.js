
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Ade!')
})
//Launch listening server on port 8080 and consoles the log.
app.listen(8080, function () {
  console.log('Aplikasi berjalan pada port 8080')
})