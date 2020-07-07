
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const PokeCard = ({ name, id }) => {
    return (
        <Link to = {`/pokemon/${name}`}>
            <Card>
                <CardImg width="100%" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} alt={name} />
                <CardBody>
                    <CardTitle>#{id} {name} </CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </Link>

    );
};

export default PokeCard;