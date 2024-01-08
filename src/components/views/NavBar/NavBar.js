import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Navbar.Brand as={NavLink}  className="ms-3" to="/">Blog.app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/" exact activeClassName="active">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;