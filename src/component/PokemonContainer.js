import React from "react"
import Search from './Search'
import PokemonCard from './PokemonCard'

class PokemonContainer extends React.Component {

    state = {        
        pokemonList: [],
        error:''
    };

    componentDidMount()
    {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=960")
            .then(
                (response)=> {
                    return  response.json();
                }
            ).then(
                (response2) =>{
                   let pokemonResult=response2.results;
                   this.setState({
                       pokemonList:pokemonResult
                   })
                }
            ).catch(
                error =>{
                    this.setState({
                        error:error
                    })
                }
            )


    }

    render()
    {
        console.log(this.state.pokemonList);
        let tempImg='something';
        let tempLabel='something';

        return (
            <div>
                <Search />

                {
                    this.state.pokemonList.map(item => {
                        return   <PokemonCard pokeUrl={item.url} pokeLabel={item.name} />

                    })
                }

            </div>
        );
    }

}
export default PokemonContainer;