import React, { Component } from 'react'
import ApiData from '../api/PokemonApi.jsx'
import Pokedex from '../components/PokedexKanto.jsx'
import { Container, Row, Col } from 'reactstrap'
import pokedexBackground from '../img/backgroundpokemon.png'



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
            <Container >
            {/*style = {{ backgroundImage: `url(${pokedexBackground})`, backgroundRepeat: 'no-repeat', height: "100%"}}*/}
                <Row>
                    <Col>
                        <br/>
                        <br/>
                        <h1 style = {{ fontFamily: 'Passion One, cursive', color: "#FDF300", fontSize: "400%" }}>Pokédex</h1>
                        <h2 style = {{ color: "#0948B2", fontSize: "200%" }}>Kanto Region</h2>
                        <ApiData addPokemons={this.addPokemons} />
                    </Col>
                </Row>
                <br/>
                <Row style={{ backgroundImage: `url(${pokedexBackground})`, overflowX : 'auto', height:'33vw'}}>
                    <Pokedex pokemons={this.state.pokemons} />
                </Row>
            </Container>
        )
    }

}

export default PokedexHome