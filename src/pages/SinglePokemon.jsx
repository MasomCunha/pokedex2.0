import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ApiToDetail from '../api/ApiToDetail.jsx'

class SinglePokemon extends Component {

    state = {
        pokemon : this.props.match.params.pokemon,
        detailInfo : null
    }

    getDetailIfo = (data) => {
        this.setState({
            detailInfo:data
        })
    }

    render(){
    return(
        <Container>
            <Row>
                <Col>
                <h1>{this.props.match.params.pokemon}</h1>
                <ApiToDetail pokemon = {this.state.pokemon} 
                             getDetailIfo = {this.getDetailIfo}
                />
                {this.state.detailInfo ? <h1>{ this.state.detailInfo.height}</h1> : console.log("no type")}
                </Col>
            </Row>
        </Container>
        
    )
    }
}

export default SinglePokemon