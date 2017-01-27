var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello from NodeJS Server');
});

app.listen(3012, function () {
    console.log('API Server started')
});

