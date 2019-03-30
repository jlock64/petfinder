var express = require('express')
var app = express()
var port = 3000
var path = require('path')

app.use('/public', express.static('public'))

app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(port, () => console.log(`Petfinder app listening on port ${port}`))