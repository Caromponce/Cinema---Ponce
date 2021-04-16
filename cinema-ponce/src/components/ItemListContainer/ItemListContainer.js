import React from 'react';
import './ItemListContainer.css';
import { Card, Button } from 'react-bootstrap';

export default function ItemListContainer(props) {
    return (
        <Card className="cardPelicula" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imagenPelicula} />
            <Card.Body>
                <Card.Title>{props.nombrePelicula}</Card.Title>
                <Card.Text>
                    {props.descripcionPelicula}
                </Card.Text>
                <Button variant="primary">Comprar Entradas</Button>
            </Card.Body>
        </Card>
    )
}


