import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

export default function ItemDetailNoModal(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col><Image src={props.detalles.imagenProducto} rounded fluid /></Col>
                    <Col>
                        <p><b>{props.detalles.nombreProducto}</b></p>
                        <p>{props.detalles.descripcionProducto}</p>
                        <p>${props.detalles.price}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
