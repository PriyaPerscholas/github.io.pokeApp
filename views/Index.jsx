const React = require('react')
const myStyle = {
       color: 'black',
       backgroundColor: 'lightcoral',
       //width: '100%',


}
//
// function capitalizeFirstLetter(str) {
//        return str.charAt(0).toUpperCase() + str.slice(1);
// }
//capitalizeFirstLetter(string);
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








