// load express
const express = require('express')

//create express app
const app = express();

// declaring a variable for database in models
const pokemon = require('./models/pokemon.js')

// define root route
app.get('/', function (req, res) {
       res.send(`<h1>Welcome to Pokemon App !</h1>`)
})

//define route pokemon which displays pokemon data as json in browser
app.get('/pokemon/', function (req, res) {
       res.send(pokemon)
})
//tell the app to listen on port 3000
app.listen(3000, function () {
       console.log('Listening on port 3000')
})