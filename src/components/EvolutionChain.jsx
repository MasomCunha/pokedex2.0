import React, { Component } from 'react'
import ApiEvolution from '../api/ApiEvolution.jsx'


class EvolutionChain extends Component {

    state = {
        pokemon : this.props.mainData.name
    }
    

    render(){
        return(
            <div>
                <ApiEvolution name = {this.state.pokemon}/>
            </div>
        )
    }
}

export default EvolutionChain