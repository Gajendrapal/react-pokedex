import React from "react"

class Search extends React.Component {

    state = {
        searchValue:''
    }
    onPokemonSearch =(event)=>{
        this.setState({
            searchValue:event.target.value
        })
    }

    render()
    {
        return (
            <input 
                type='text' 
                value={this.state.searchValue} 
                onChange={this.onPokemonSearch}
            />
        );
    }

}
export default Search;