
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row } from 'reactstrap';

const SingleCard = ({ mainData, description }) => {

    const type = () => {
        return (
            mainData.types.length === 1 ?
                (
                    <Row>
                        <Col style={{ backgroundColor: color(mainData.types[0].type.name) }}>
                            {mainData.types[0].type.name}
                        </Col>
                    </Row>
                )
                :
                (
                    <Row xs="2">
                        {mainData.types.map((e) => {
                            return (
                                <Col key={e.type.name} style={{ backgroundColor: color(e.type.name) }}>{e.type.name}</Col>
                            )
                        })}
                    </Row>
                )
        )

    }


    const color = (type) => {
        switch (type) {
            case 'normal':
                return "#9B9B9B";
            case 'poison':
                return "#811C9F";
            case 'psychic':
                return "#E671E1";
            case 'grass':
                return "#07D415";
            case 'ground':
                return "#D5C408";
            case 'ice':
                return "#92ECEE"
            case 'fire':
                return "#F40B2F";
            case 'rock':
                return "#A38C2E";
            case 'dragon':
                return "#7C96F3";
            case 'water':
                return "#2250F6";
            case 'bug':
                return "#83C305";
            case 'dark':
                return "#171912"
            case 'fighting':
                return "#D34F15";
            case 'ghost':
                return "#7B3CED";
            case 'stell':
                return "#DACDF0";
            case 'flying':
                return "#8FC4E3";
            case 'electric':
                return "#F7D900"
            case 'fairy':
                return "#ED90E9"
            default:
                console.log("no colors");
        }
    }


    return (
        <div>
            <Card style={{ backgroundColor: "yellow", fontFamily: 'Lora, serif' }}>
                <Row>
                    <Col>
                        <p style={{ fontSize: "100%" }}><b>normal form</b></p>
                        <CardImg top width="10%" src={mainData.sprites.front_default} alt="Card image cap" />
                    </Col>
                    <Col>
                        <p style={{ fontSize: "100%" }}><b>shiny form</b></p>
                        <CardImg top width="10%" src={mainData.sprites.front_shiny} alt="Card image cap" />
                    </Col>
                </Row>
                <CardBody >
                    <CardTitle style={{ fontSize: "100%" }}> <b>#{mainData.id} - {mainData.species.name}</b></CardTitle>
                    <CardSubtitle style={{ fontSize: "100%" }}>{type()}</CardSubtitle>
                    <br />
                    <Row>
                        <Col>
                            <CardText style={{ fontSize: "100%" }}><b>height: {mainData.height / 10} m</b></CardText>
                        </Col>
                        <Col>
                            <CardText style={{ fontSize: "100%" }}><b>weight: {mainData.weight / 10} kg</b></CardText>
                        </Col>
                    </Row>
                    <br />
                    <h6><b>Description</b></h6>
                    <br />
                    <p>{description}</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default SingleCard;