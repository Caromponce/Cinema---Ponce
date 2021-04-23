import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

export default function Item(props) {

    function onAdd(cantidadElegida) {
        alert(`Película ${props.datos.nombrePelicula} agregada al carrito. Cantidad: ${cantidadElegida}.`)
    }
    return (
        <>
            <Card className="cardPelicula" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.datos.imagenPelicula} />
                <Card.Body>
                    <Card.Title>{props.datos.nombrePelicula}</Card.Title>
                    <Card.Text>
                        {props.datos.descripcionPelicula}
                    </Card.Text>
                    <Card.Text>
                        Precio: ${props.datos.price}
                    </Card.Text>
                    <ItemCount stock={props.datos.stock} initial="0" onAdd={onAdd} />
                </Card.Body>
            </Card>
            <Button variant="warning" onClick={props.returnList}>Volver</Button>
        </>
    );
}