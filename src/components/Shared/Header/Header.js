import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logos/Group 1329.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <Link to='/'><img src={logo} alt="" className='img-fluid' width={202} /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fw-semibold">
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link >Donation</Nav.Link>
                        <Nav.Link >Events</Nav.Link>
                        <Nav.Link >Blog</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to=''>
                            <button className='btn btn-primary fw-bold' style={{ width: '150px', height: '40px' }}>Register</button>
                        </Nav.Link>
                        <Nav.Link as={Link} to=''>
                            <button className='btn btn-dark fw-bold' style={{ width: '150px', height: '40px' }}>Admin</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;