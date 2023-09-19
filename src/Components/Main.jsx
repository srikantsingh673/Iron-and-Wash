import React from 'react'
import { Container, Button, Card, Row, Col, ListGroup } from 'react-bootstrap'
import washing from '../Assets/washing.png'
import iron from '../Assets/iron.png'
import dry from '../Assets/dry_clean.png'
import shoes from '../Assets/shoe.png'
import winter from '../Assets/winter.png'
import miss from '../Assets/misslenious.png'


const Main = () => {
    return (
        <div id='home' className='App'>
            <div className='button-div'>
                <a href='/schedule'>
                    <Button className='button'> SCHEDULE PICKUP </Button>
                </a>
            </div>
            <Container id='pricing'>
                <Row>
                    <Col>
                        <Card style={{ width: '19rem', marginLeft: '9%', marginTop: '4%' }} className='card'>
                            <div className="img">
                                <h1><strong> &nbsp; &nbsp;K G</strong></h1>
                            </div>
                            <Card.Body >
                                <Card.Title className='title-large'><b>WASH & IRON</b></Card.Title>
                                <Card.Title className='title-large'><b>₹45 Per KG</b></Card.Title>
                                <Card.Text className='title-para'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <a href='/schedule'>
                                    <Button className='s-button'>SCHEDULE PICKUP</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '19rem', marginLeft: '9%', marginTop: '4%' }} className='card'>
                            <div className="img">
                                <h1><strong> &nbsp; &nbsp;K G</strong></h1>
                            </div>
                            <Card.Body >
                                <Card.Title className='title-large'><b>WASH & Fold</b></Card.Title>
                                <Card.Title className='title-large'><b>₹40 Per KG</b></Card.Title>
                                <Card.Text className='title-para'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
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
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Pair of shoes : ₹60</ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <a href='/schedule'>
                                    <Button className='s-button'>SCHEDULE PICKUP</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
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
                                        <ListGroup.Item>Single Blanket : ₹150</ListGroup.Item>
                                        <ListGroup.Item>Double Blanket : ₹250</ListGroup.Item>
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
                                        <ListGroup.Item>Single/Double Blanket : ₹300 & ₹400</ListGroup.Item>
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
                                        <ListGroup.Item>School Bag : ₹50</ListGroup.Item>
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
        </div>
    )
}

export default Main