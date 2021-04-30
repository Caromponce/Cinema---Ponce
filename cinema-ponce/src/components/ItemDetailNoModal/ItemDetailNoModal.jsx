import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

export default function ItemDetailNoModal(props) {
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
