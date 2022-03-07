const React = require("react")
class Show extends React.Component {
       render() {
              const { pokemon } = this.props;
              return (
                     <html>
                            <head>
                                   <title>Pokemon</title>
                            </head>
                            <body style={{ backgroundColor: 'lightcoral' }}>
                                   <h1 style={{ fontSize: 'Xxlarge' }}>'Gotta Catch 'Em All'</h1>
                                   <h2>{pokemon.name}</h2>
                                   <img src={`${pokemon.img}.jpg`}></img>
                                   <br></br>
                                   <a href='/pokemon'>Back</a>
                            </body>
                     </html>
              )
       }
}
module.exports = Show