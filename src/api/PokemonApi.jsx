import React, { Component, Fragment } from 'react';
import axios from 'axios';

class ApiData extends Component {
    
    state = {
        pokemonList: null
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => {
        console.log(res.data.results)
        const pokemonList = res.data.results;
        this.setState({ pokemonList: pokemonList });
        console.log(this.state.pokemonList)
        this.pokemonList()
      })
    }

    pokemonList = () => {
        (this.state.pokemonList ? 
        this.props.addPokemons(this.state.pokemonList) : (console.log("no data")))
    }

    render(){
        return(
            <Fragment/>
        )
    }


}

export default ApiData