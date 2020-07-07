import React, { Component } from 'react'
import ApiData from '../api/PokemonApi.jsx'
import Pokedex from '../components/PokedexKanto.jsx'
import { Container, Row, Col } from 'reactstrap'


class PokedexHome extends Component {

    state = {
        pokemons: null
    }

    addPokemons = (pokemons) => {
        this.setState({
            pokemons
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>PoKedex 2.0</h1>
                        <ApiData addPokemons={this.addPokemons} />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Pokedex pokemons={this.state.pokemons} />
                </Row>
            </Container>
        )
    }

}

export default PokedexHome