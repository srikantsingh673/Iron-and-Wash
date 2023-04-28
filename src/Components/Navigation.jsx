import React from 'react'
import './Style.css'
import { Container, Nav, Navbar} from 'react-bootstrap'
import logo from '../Assets/logo.png'

const Navigation = () => {
    return (
        <div >
            <Navbar bg="dark" className='nav'variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />&nbsp;&nbsp;
                        <strong>Iron and Wash </strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><strong>Home</strong></Nav.Link>
                            <Nav.Link href="/"><strong>Pricing</strong></Nav.Link>
                            <Nav.Link href="#Support"><strong>Support</strong></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation