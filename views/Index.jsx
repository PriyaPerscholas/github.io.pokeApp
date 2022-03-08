const React = require('react')
const myStyle = {
       color: 'black',
       backgroundColor: 'lightcoral',
       minheight: '100vh',
       maxwidth: '400px',
       margin: 0,

}

class Index extends React.Component {
       render() {

              const { pokemon } = this.props;
              return (
                     <div style={myStyle}>

                            <h1>'See All The Pokemon!'</h1>
                            <ul style={{ fontWeight: 'bold' }}>
                                   {pokemon.map((pokemon, i) => {
                                          return (
                                                 <li>
                                                        <a href={`/pokemon/${i}`}>
                                                               <h2>{pokemon.name.charAt(0).toUpperCase(0) + pokemon.name.slice(i)}</h2>
                                                               <br></br>
                                                        </a>
                                                 </li>
                                          );
                                   })}
                            </ul>
                     </div>
              )
       }
}

module.exports = Index;










