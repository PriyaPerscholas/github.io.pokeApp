// load express
const express = require('express')

//create express app
const app = express();

// declaring a variable for database in models
const pokemon = require('./models/pokemon.js')

//set up view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// define root route
app.get('/', function (req, res) {
       res.send(`<h1>Welcome to Pokemon App !</h1>`)
})

//define route pokemon which displays pokemon data as json in browser
// app.get('/pokemon/', function (req, res) {
//        res.send(pokemon)
// })

//it will send the html in the Index file as a response
app.get('/pokemon', function (req, res) {
       res.render('Index', { pokemon: pokemon });
});

//define another route which displays id
app.get('/pokemon/:id', function (req, res) {
       res.send(pokemon[req.params.id])
})

//tell the app to listen on port 3000
app.listen(3000, function () {
       console.log('Listening on port 3000')
})