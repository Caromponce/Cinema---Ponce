import React, { useState } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetailNoModal(props) {
    const [finishCompra, setFinishCompra] = useState(false);

    function onAdd(cantidadElegida) {
        console.log(`Producto ${props.detalles.nombreProducto} agregado al carrito. Cantidad: ${cantidadElegida}.`);
        setFinishCompra(true);
    }
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col><Image src={props.detalles.imagenProducto} rounded fluid /></Col>
                    <Col>
                        <p><b>{props.detalles.nombreProducto}</b></p>
                        <p>${props.detalles.price}</p>
                        <p>Stock: {props.detalles.stock}</p>
                        <p>Categoria: {props.detalles.categoriaNombre}</p>
                        <p>{props.detalles.descripcionProducto}</p>
                        {!finishCompra ?
                            <ItemCount stock={props.detalles.stock} initial="0" onAdd={onAdd} id={props.detalles.id} />
                            : <Link to={'/cart'} ><button>Termina tu compra</button></Link>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
