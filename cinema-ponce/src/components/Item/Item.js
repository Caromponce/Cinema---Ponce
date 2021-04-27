import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

export default function Item(props) {

    function onAdd(cantidadElegida) {
        alert(`Película ${props.datosProducto.nombrePelicula} agregada al carrito. Cantidad: ${cantidadElegida}.`)
    }
    return (
        <li>
            <Card className="cardPelicula" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.datosProducto.imagenPelicula} />
                <Card.Body>
                    <Card.Title>{props.datosProducto.nombrePelicula}</Card.Title>
                    <Card.Text>
                        {props.datosProducto.descripcionPelicula}
                    </Card.Text>
                    <Card.Text>
                        Precio: ${props.datosProducto.price}
                    </Card.Text>
                    <ItemCount stock={props.datosProducto.stock} initial="0" onAdd={onAdd} />
                </Card.Body>
            </Card>
        </li>
    );
}