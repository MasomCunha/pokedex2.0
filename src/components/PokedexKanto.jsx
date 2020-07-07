import React, { Fragment } from 'react'
import PokeCard from './PokeCard.jsx'
import { Container, Row, Col } from 'reactstrap';

const PokedexKanto = ({ pokemons }) => {


    let renderPokemon = () => {
        let count = 0
        return pokemons.map((pokemon) => {
            count++;
           
            return (
                <Col xs="12" sm="6" md="2" key={pokemon.name} >
                   <PokeCard 
                        name = {pokemon.name}
                        id = {count}
                    />
                </Col>

            )
        })
    }



    return (
        <Fragment>
                {pokemons ? (renderPokemon()) : <h1>loading...</h1> }
        </Fragment>
    )
 
}

export default PokedexKanto