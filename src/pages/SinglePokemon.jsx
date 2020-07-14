import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ApiToDetail from '../api/ApiToDetail.jsx'
import SingleCard from '../components/SingleCard.jsx'
import Stats from '../components/Stats.jsx'

class SinglePokemon extends Component {

    state = {
        pokemon: this.props.match.params.pokemon,
        detailInfo: null,
        flavorInfo: ''

    }

    getDetailInfo = (data) => {
        this.setState({
            detailInfo: data
        })
    }

    getFlavorInfo = (data) => {
        this.setState({
            flavorInfo: data
        })
    }

    render() {
        return (
            <Container>
                <ApiToDetail pokemon={this.state.pokemon}
                    getDetailInfo={this.getDetailInfo}
                    getFlavorInfo={this.getFlavorInfo}
                />
                <Row>
                    <Col>
                        <br/>
                        <br/>
                        <h1 style = {{ fontFamily: 'Passion One, cursive', color: "#FDF300", fontSize: "400%" }}>{this.props.match.params.pokemon}</h1>
                    </Col>
                </Row>

                {this.state.detailInfo ? 
                    <Row md = "2">
                    <Col>
                        <SingleCard mainData = {this.state.detailInfo}
                                    description = {this.state.flavorInfo}
                        /> 
                    </Col>
                    <Col>
                      <Stats mainData = {this.state.detailInfo}/> 
                    </Col>
                </Row>
                : <h1>no information</h1>
                }
                
            </Container>

        )
    }
}

export default SinglePokemon