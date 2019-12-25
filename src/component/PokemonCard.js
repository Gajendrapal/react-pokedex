import React from "react"

class PokemonCard extends React.Component {
state={
pokeImageUrl:""
}

    componentDidMount()
    {
    fetch(this.props.pokeUrl)
    .then(
        response => {
            return response.json();
        }
    ).then(
        response2 =>{
let imageUrl = response2.sprites.front_default
this.setState(
    {
        pokeImageUrl:imageUrl
    }
)
//console.log(response2);
        }

    )


    }

    render()
    {
        
        return (
            <div>
                <img src= {this.state.pokeImageUrl} height="50px" width="50px"/>
                <span>
                {this.props.pokeLabel}
                </span>            
            </div>
        );
    }

}
export default PokemonCard;