var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;


var app = express();
var db;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.get('/artists/:id', function (req, res) {
    var artist = artists.find(function (artist) {
        return artist.id === Number(req.params.id);
    });
    res.send(artist);
});

app.post('/artists', function (req, res) {
    var artist = {
        name: req.body.name
    };
    db.collection('artist').insert(artist, function (err, resurs) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(artist);
    });
});

app.put('/artists/:id', function (req, res) {
    var artist = artists.find(function (artist) {
        return artist.id === Number(req.params.id);
    });
    artist.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/artists/:id', function (req, res) {
    artists = artists.filter(function (artist) {
        return artist.id !== Number(req.params.id);
    });
    res.sendStatus(200);
});


mongoClient.connect('mongodb://localhost:27017/testDB', function (err, database) {
    if (err) {
        return console.log(err)
    }
    db = database;

    app.listen(3012, function () {
        console.log('API Server started')
    });
});
