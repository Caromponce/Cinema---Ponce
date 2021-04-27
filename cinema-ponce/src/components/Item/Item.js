import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

export default function Item(props) {

    function onAdd(cantidadElegida) {
        alert(`Producto ${props.datosProducto.nombreProducto} agregado al carrito. Cantidad: ${cantidadElegida}.`)
    }
    return (
        <li>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.datosProducto.imagenProducto} />
                <Card.Body>
                    <Card.Title>{props.datosProducto.nombreProducto}</Card.Title>
                    <Card.Text>
                        Precio: ${props.datosProducto.price}
                    </Card.Text>
                    <ItemCount stock={props.datosProducto.stock} initial="0" onAdd={onAdd} id={props.datosProducto.id} />
                </Card.Body>
            </Card>
        </li>
    );
}