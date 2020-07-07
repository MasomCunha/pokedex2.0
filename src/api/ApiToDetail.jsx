import React, { Component, Fragment } from 'react'
import axios from 'axios'

class ApiToDetail extends Component{

    state = {
        pokeDetail : null
    }

    componentDidMount () {

        axios.get('https://pokeapi.co/api/v2/pokemon/' + `${this.props.pokemon}`)
      .then(res => {
        console.log(res.data)
        this.setState({
            pokeDetail : res.data
        })
        this.getDetailInfo();
      })

      
    }

    getDetailInfo = () => {
        this.state.pokeDetail ? this.props.getDetailIfo(this.state.pokeDetail) : console.log("no data")
    } 

    render(){
        return(
            <Fragment/>
        )
    }
}

export default ApiToDetail