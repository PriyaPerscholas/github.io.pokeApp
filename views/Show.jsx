const React = require("react")
class Show extends React.Component {
       render() {
              const { pokemon } = this.props;
              return (

                     // <head>

                     //        <title>Pokemon</title>
                     // </head>
                     <body>
                            <h1>'Gotta Catch 'Em All'</h1>
                            <h2> Pokemon Name</h2>
                            <img src={`${pokemon.img}.jpg`}></img>
                            <a href='/pokemon'>Back</a>
                     </body>

              )
       }
}
module.exports = Show