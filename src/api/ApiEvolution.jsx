import React, { Component } from 'react'
import ApiData from './PokemonApi'
import axios from 'axios'



class ApiEvolution extends Component {

    
    state = {
        name : this.props.name
    }

    componentDidMount () {

        axios.get('https://pokeapi.co/api/v2/evolution-trigger/'+ `${this.props.name}` +'/').then(res => {
           console.log(res.data);   
          });
    }



    render(){
        return (
            <h1>api work</h1>
        )
    }

}

export default ApiEvolution