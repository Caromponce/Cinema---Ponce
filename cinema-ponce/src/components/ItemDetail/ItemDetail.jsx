import React, { useState } from 'react';
import { Modal, Image, Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail(props) {
	const [finishCompra, setFinishCompra] = useState(false);

	function onAdd(cantidadElegida) {
		console.log(`Producto ${props.detalles.nombreProducto} agregado al carrito. Cantidad: ${cantidadElegida}.`);
		setFinishCompra(true);
	}

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
							{!finishCompra ?
								<ItemCount stock={props.detalles.stock} initial="0" onAdd={onAdd} id={props.detalles.id} />
								: <Link to={'/cart'} ><button>Termina tu compra</button></Link>
							}
						</Col>
					</Row>
					<Row>
						<NavLink to={`/producto/${props.detalles.id}`} activeClassName="categoriaActiva">Ver en Pantalla Completa</NavLink>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cerrar</Button>
			</Modal.Footer>
		</Modal>
	);
}