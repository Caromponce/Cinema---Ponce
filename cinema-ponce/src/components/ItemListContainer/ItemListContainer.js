import React from 'react';
import './ItemListContainer.css';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer(props) {

    function onAdd(cantidadElegida) {
        alert(`Película ${props.nombrePelicula} agregada al carrito. Cantidad: ${cantidadElegida}.`)
    }
    return (
        <Card className="cardPelicula" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imagenPelicula} />
            <Card.Body>
                <Card.Title>{props.nombrePelicula}</Card.Title>
                <Card.Text>
                    {props.descripcionPelicula}
                </Card.Text>
                <ItemCount stock={props.stock} initial="0" onAdd={onAdd} />
            </Card.Body>
        </Card>
    )
}


