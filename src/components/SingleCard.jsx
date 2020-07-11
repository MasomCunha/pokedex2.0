
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row } from 'reactstrap';

const SingleCard = ({ mainData, description }) => {

    const type = () => {
        return (<Row xs = "2">
            {mainData.types.map((e) => {
            return (
            <Col key = {e.type.name}>{e.type.name}</Col>
        )})
            }</Row>)

    }



    return (
        <div>
            <Card>
                <Row>
                    <Col>
                        <CardImg top width="100%" src={mainData.sprites.front_default} alt="Card image cap" />
                        <p>normal form</p>
                    </Col>
                    <Col>
                        <CardImg top width="100%" src={mainData.sprites.front_shiny} alt="Card image cap" />
                        <p>shiny form</p>
                    </Col>
                </Row>
                <CardBody>
                    <CardTitle>#{mainData.id} - {mainData.species.name}</CardTitle>
                    <CardSubtitle>{type()}</CardSubtitle>
                    <CardText>height: {mainData.height / 10} m</CardText>
                    <CardText>weight: {mainData.weight / 10} kg</CardText>
                    <p>{description}</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default SingleCard;