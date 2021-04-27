import React from 'react';
import { Modal, Image, Container, Row, Col, Button } from 'react-bootstrap';


export default function ItemDetail(props) {

	return (
		<Modal show={props.show} onHide={props.onHide} size="lg">
			<Modal.Header closeButton>
				<Modal.Title id="example-modal-sizes-title-lg">
					{props.detalles.nombreProducto}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
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
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cerrar</Button>
			</Modal.Footer>
		</Modal>
	);
}