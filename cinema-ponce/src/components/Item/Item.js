import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import './Item.css';

export default function Item(props) {
    const [createModal, setCreateModal] = useState(false);

    function onAdd(cantidadElegida) {
        alert(`Producto ${props.datosProducto.nombreProducto} agregado al carrito. Cantidad: ${cantidadElegida}.`)
    }

    function accionModal(bool) {
        setCreateModal(bool);
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
                    <button onClick={() => accionModal(true)}>Ver Más</button>
                    {createModal ? <ItemDetailContainer id={props.datosProducto.id} accionModal={accionModal} modal={true} /> : null}
                </Card.Body>
            </Card>
        </li>
    );
}