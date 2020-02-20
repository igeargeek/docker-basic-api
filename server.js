var express = require('express')
var app = express()

const port = 3000

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/about-me', function (req, res) {
  res.send('my name\'s noppadol lanngain')
})

app.listen(port, () => console.log(`running server now! ${port}`))

module.exports = app