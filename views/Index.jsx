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
                                                        The {' '}
                                                        <a href={`/pokemon/${i}`}>
                                                               {pokemon.name}
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










