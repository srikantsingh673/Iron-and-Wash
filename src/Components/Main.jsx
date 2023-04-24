import React from 'react'
import { Container, Nav, Navbar, Button, Card, Row, Col, ListGroup } from 'react-bootstrap'
import { IoCall } from "react-icons/io5";
import logo from '../Assets/logo.png'
import washing from '../Assets/washing.png'
import iron from '../Assets/iron.png'
import dry from '../Assets/dry_clean.png'
import shoes from '../Assets/shoe.png'
import winter from '../Assets/winter.png'
import miss from '../Assets/misslenious.png'
const Main = () => {
    return (
        <div id='home'>
            <Navbar bg="none" expand="lg">
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
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#Support">Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='button-div'>
                <a href='/schedule'>
                    <Button className='button'> SCHEDULE PICKUP </Button>
                </a>
            </div>
            <Container id='pricing'>
                <Row>
                    <Col>
                        <Card style={{ width: '19rem', marginLeft: '9%', marginTop: '4%' }} className='card'>
                            <img
                                src={washing}
                                width="60"
                                height="60"
                                className="img"
                                alt="washing"
                            />
                            <Card.Body >
                                <Card.Title className='title-small'><b>Premium Wash</b></Card.Title>
                                <Card.Title className='title-large'><b>Wash & Iron</b></Card.Title>
                                <Card.Text className='title-para'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>T-Shirt/Shirt/Jeans : ₹12/piece</ListGroup.Item>
                                        <ListGroup.Item>BedSheet(Single/Double) : ₹18 & ₹30</ListGroup.Item>
                                        <ListGroup.Item>Towel : ₹15</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <a href='/schedule'>
                                    <Button className='s-button'>SCHEDULE PICKUP</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col><Card style={{ width: '19rem', marginLeft: '9%', marginTop: '4%' }}>
                        <img
                            src={iron}
                            width="60"
                            height="60"
                            className="img"
                            alt="iron"
                        />
                        <Card.Body>
                            <Card.Title className='title-small'><b>Classic Look</b></Card.Title>
                            <Card.Title className='title-large'><b>Iron Only</b></Card.Title>
                            <br /><Card.Text className='title-para'>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>T-Shirt/Shirt/Pant : ₹6/piece</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            <a href='/schedule'>
                                <Button className='s-button'>SCHEDULE PICKUP</Button>
                            </a>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '19rem', marginLeft: '9%', marginTop: '4%' }}>
                            <img
                                src={shoes}
                                width="60"
                                height="60"
                                className="img"
                                alt="shoes"
                            />
                            <Card.Body>
                                <Card.Title className='title-small'><b>Professional</b></Card.Title>
                                <Card.Title className='title-large'><b>Shoe Cleaning</b></Card.Title><br />
                                <Card.Text className='title-para'>
                                    Running/Walking : ₹60
                                </Card.Text>
                                <a href='/schedule'>
                                    <Button className='s-button'>SCHEDULE PICKUP</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col><Card style={{ width: '19rem', marginLeft: '9%', marginTop: '4%' }}>
                        <img
                            src={dry}
                            width="60"
                            height="60"
                            className="img"
                            alt="dry"
                        />
                        <Card.Body>
                            <Card.Title className='title-small'><b>Brand New Look</b></Card.Title>
                            <Card.Title className='title-large'><b>Dry Cleaning</b></Card.Title>
                            <Card.Text className='title-para'><br />
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Aprin/Pant/Shirt : ₹120</ListGroup.Item>
                                    <ListGroup.Item>Hoodies/Sweater : ₹130</ListGroup.Item>
                                    <ListGroup.Item>Sweatshirt : ₹100</ListGroup.Item>
                                    <ListGroup.Item>Blazer : ₹160</ListGroup.Item>
                                    <ListGroup.Item>Jacket/Light Blanket Single : ₹120</ListGroup.Item>
                                    <ListGroup.Item>Heavy Blanket Single/Double : ₹200 & ₹350</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            <a href='/schedule'>
                                <Button className='s-button'>SCHEDULE PICKUP</Button>
                            </a>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '19rem', marginLeft: '9%', marginTop: '4%' }}>
                            <img
                                src={winter}
                                width="60"
                                height="60"
                                className="img"
                                alt="shoes"
                            />
                            <Card.Body>
                                <Card.Title className='title-small'><b>Premium Wash</b></Card.Title>
                                <Card.Title className='title-large'><b>Winter Wear</b></Card.Title><br />
                                <Card.Text className='title-para'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Sweat Shirt : ₹20</ListGroup.Item>
                                        <ListGroup.Item>Sweat Shirt Heavy : ₹30</ListGroup.Item>
                                        <ListGroup.Item>Hoodies : ₹25</ListGroup.Item>
                                        <ListGroup.Item>Single Blanket Light/Heavy : ₹70 & ₹130 </ListGroup.Item>
                                        <ListGroup.Item>Double Blanket Light/Heavy : ₹150 & ₹200</ListGroup.Item>
                                        <ListGroup.Item>Winter Jacket : ₹50</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <a href='/schedule'>
                                    <Button className='s-button'>SCHEDULE PICKUP</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '19rem', marginLeft: '9%', marginTop: '4%' }}>
                            <img
                                src={miss}
                                width="60"
                                height="60"
                                className="img"
                                alt="shoes"
                            />
                            <Card.Body>
                                <Card.Title className='title-small'><b>Premium Wash</b></Card.Title>
                                <Card.Title className='title-large'><b>Miscellaneous</b></Card.Title><br />
                                <Card.Text className='title-para'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>White Coat : ₹30</ListGroup.Item>
                                        <ListGroup.Item>Shocks Pair : ₹6</ListGroup.Item>
                                        <ListGroup.Item>School Bag : ₹40</ListGroup.Item>
                                        <ListGroup.Item>Curtain(Small/Large) : ₹30 & ₹60</ListGroup.Item>
                                        <ListGroup.Item>Denim Jacket/Track Suit : ₹25</ListGroup.Item>
                                        <ListGroup.Item>Blazzer : ₹70</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <a href='/schedule'>
                                    <Button className='s-button'>SCHEDULE PICKUP</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br /><br /><br />
            <Container>
                <Row className='Support' id='Support'>
                    <Col>
                        <h4>Support Helpline</h4>
                        <strong><a href="tel:7988606676" className='call'><IoCall />&nbsp;&nbsp;7988606676</a><br /></strong><br />
                    </Col>
                    <Col>
                    <h4>Pickup Helpline</h4>
                    <strong><a href="tel:7988606676" className='call'><IoCall />&nbsp;&nbsp;7988606676</a><br /></strong><br />
                    </Col>
                </Row>
            </Container>
            <div >
            </div><br />
            <div className="footer__copyright">
                <small>Design & Developed by <a href='https://www.instagram.com/the_rishu0p/'> Rishu </a></small><br />
                <small>&copy; ironandwash.com</small>
            </div>
        </div>
    )
}

export default Main