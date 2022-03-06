# github.io.pokeApp

The User Stories
When a user goes to the /pokemon route they will see an index of pokemon: the names of each pokemon rendered to the page.
When a user clicks on the name of the pokemon, they will be taken to that pokemon's show page, and will see the pokemon's name and image.

Let's Start Catching 'em All!
Set up the file structure
In terminal 1 at a time:

inside your homework folder:
mkdir pokemon_app
cd pokemon_app
mkdir views
touch views/Index.jsx
touch views/Show.jsx
mkdir models
touch models/pokemon.js
touch server.js
touch .gitignore
npm init -y
  Commit:
"All my files are created"

Install NPM packages
In terminal:
Make sure that you are on the same directory level as your package.json (why?)
npm i express
npm i express-react-views react@16 react-dom@16
check your package.json
Approximate package.json
 Commit:
"All my npm packages are added"

Set up your server
-In your server.js file, set up your server
require express
set express() to a variable
set a variable of port to 3000
set your app to listen to the port and include a console.log(), so that you can tell when your server is running
include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
In terminal
nodemon or nodemon server.js (if you set your package.json to start server.js you do't need to put it after nodemon )
GOTCHA! : nodemon will only work if you run it from the same location as your package.json
In the browser
go to localhost:3000
check that you have your Welcome to the Pokemon App! message displaying.
  Commit:
"My server is set up and running"

Set up your 'database'
You have created a file called pokemon.js
Inside of this file, put the following array of pokemon objects. This is your 'database' for tonight's homework, copy and paste it as is! You'll notice the image url's are missing something, this is intentional, do not edit anything directly inside the 'database'!
const pokemon = [
            {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
            {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
            {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
            {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
            {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
            {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
            {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
         ];
Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
Set this 'database' to a variable called pokemon in your server.js file
Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser.
  Commit:
"Connected my database, can see json in the browser"

Set up your index view
Instead of displaying json at your /pokemon route, you should serve the Index.jsx file you created that will display your pokemon

You will have to set up your jsx file

Start with your html boilerplate code



 
 
 
