import React from 'react';
import logo from './resNavBar/claqueta-8.png';
import './NavBar.css';
import CartWidget from './cartWidget/CartWidget';
import { Navbar, Nav } from 'react-bootstrap';


export default function NavBar() {
    return (
        <>
            <Navbar className="navBar" variant="dark">
                <Navbar.Brand className="brand" href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="cinema logo"
                    />
                    Cinema Store</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Ofertas</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar>
        </>
    )
}