import React from 'react';
import logo from './resNavBar/claqueta-8.png';
import './NavBar.css';
import CartWidget from './cartWidget/CartWidget';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <Navbar className="navBar" variant="dark">
                <Link to={'/'} >
                    <Navbar.Brand className="brand" href="#home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="cinema logo"
                        />
                    Cinema Store</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item><NavLink to={'/categoria/remera'} activeClassName="categoriaActiva">Remeras</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink to={'/categoria/buzo'} activeClassName="categoriaActiva">Buzos</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink to={'/categoria/pantalon'} activeClassName="categoriaActiva">Pantalones</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink to={'/categoria/gorra'} activeClassName="categoriaActiva">Gorras</NavLink></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                        <Link to={'/contacto'} >Contacto</Link>
                    </Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar>
        </>
    )
}