const React = require('react')
// const myStyle = {
//        color: '#ffffff',
//        backgroundColor: '#000000',
// }
class Index extends React.Component {
       render() {
              const { pokemon } = this.props;
              return (
                     <div>
                            <h1>'See All The Pokemon!'</h1>
                            <ul>
                                   {pokemon.map((pokemon, i) => {
                                          return (
                                                 <li>
                                                        {pokemon.name} <br></br>

                                                 </li>
                                          );
                                   })}
                            </ul>
                     </div>
              )
       }
}
// class MyFirstComponent extends React.Component() {
//        return(
//          <div style = { myStyle } > 'My First React Component!'</div>;
//        )
//        }
module.exports = Index;








