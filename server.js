var express = require('express');
var app = express();
var artists = [
    {
        id: 1,
        name: 'Metallica'
    },
    {
        id: 2,
        name: 'Aria'
    },
    {
        id: 3,
        name: 'Iron Maiden'
    }
];

app.get('/', function (req, res) {
    res.send('Hello from NodeJS Server');
});

app.get('/artists', function (req, res) {
    res.send(artists);
});

app.listen(3012, function () {
    console.log('API Server started')
});

