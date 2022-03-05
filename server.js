// load express
const express = require('express')
//create express app
const app = express();
// define root route
app.get('/', function (req, res) {
       res.send(`<h1>Welcome to Pokemon App !</h1>`)
})
//tell the app to listen on port 3000
app.listen(3000, function () {
       console.log('Listening on port 3000')
})