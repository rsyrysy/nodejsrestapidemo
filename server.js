var express = require('express');
var app = express();
var fs = require("fs");

// Home Page 
app.get('/', (req, res) => res.send('Welcome! You are all set to go!'))

// Configure server 
var server = app.listen(9000, '127.0.0.1', function (req, res) {

    var host = server.address().address
    var port = server.address().port

    console.log(`Server running at http://${host}:${port}/`);
})

var bodyParser = require('body-parser')
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost', 
        database: 'SchoolDB' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});


//Arbitrary ID manager since we don't use a database
var index = 2;

// Initializing Destinations Array.. It will behave like a dummy database 
var destinations = [{
    "id": 1,
    "city": "ahmedabad",
    "description": "World best tourist place ",
    "country" : "India"
},  {
    "id": 2,
    "city": "jaipur",
    "description": "pink city ",
    "country" : "India"
}]

// A promo message to user 
var message = "Get 50% cachback on saving your first spot.";

app.get('/messages', function (req, res) {
    res.end(JSON.stringify(message));
})

// Get the list of destinations, convert it to JSON and send it back to client 
app.get('/destination', function (req, res) {
    var count = req.query.count != undefined ? req.query.count : req.query.count = 100;
    if(req.query.country){
        var countrySpots = destinations.filter(function(destination) {
            return destination.country == req.query.country
        });
        res.end(JSON.stringify(countrySpots.slice(0, count)));
    }
    
    res.end(JSON.stringify(destinations.slice(0, count)));
})

// Get one particular Destination using ID 
app.get('/destination/:id', function (req, res) {
    for (var i = 0; i < destinations.length; i++) {
        if(destinations[i].id == req.params.id){
            res.end(JSON.stringify(destinations[i]));
        }
    }
})

// Create a new Destination and add it to existing Destinations list 
app.post('/destination', function (req, res) {
    var newDestination = {
        "city": req.body.city,
        "description": req.body.description,
        "country" : req.body.country,
        "id": index + 1
    }

    index++;

    destinations.push(newDestination);
    res.status(201).end(JSON.stringify(newDestination));
})

// Update a Destination 
app.put('/destination/:id', function (req, res) {
    var destination;
    for (var i = 0; i < destinations.length; i++) {
        if(destinations[i].id == req.params.id){
            destinations[i].city = req.body.city;
            destinations[i].country = req.body.country;
            destinations[i].description = req.body.description;
            destination = destinations[i];
        }
    }

    res.end(JSON.stringify(destination));
})

// Delete a Destination 
app.delete('/destination/:id', function (req, res) {
    for (var i = 0; i < destinations.length; i++) {
        if(destinations[i].id == req.params.id){
            destinations.splice(i, 1);
            res.status(204).end(JSON.stringify(destinations[i]));
        }
    }
});



