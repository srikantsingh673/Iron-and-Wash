import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Support = () => {
    return (
        <div className='App'>
            <Container >
                <Row className='Support' id='Support'>
                </Row>
                <Col className='add'>
                    <IoLocationSharp />
                    <h5><strong>Our Location</strong></h5>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3428.1035522300535!2d76.55927131506037!3d30.771672981623666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ2JzE4LjAiTiA3NsKwMzMnNDEuMyJF!5e0!3m2!1sen!2sin!4v1678330224375!5m2!1sen!2sin" title="Map Marker"></iframe>
                    <p className='title-add'><b>Gharaun , S.A.S Nagar Mohali, Punjab 140413</b></p>
                </Col>
                <Row className='Support-cont'>
                    <Col>
                        <h6>Support Helpline</h6>
                        <IoCall /> <a href="tel:8264145099">8264145099 </a>

                    </Col>
                    <Col>
                        <h6>Pickup Helpline</h6>
                        <IoCall /> <a href="tel:9056185338">9056185338</a>
                    </Col>
                </Row>
                <Row className='Support-mail'>
                    <Col>
                        <h6>Email Address</h6>
                        <MdEmail /><a href="mailto: ironandwash@gmail.com"> ironandwash@gmail.com</a>
                    </Col>
                </Row>
            </Container><br />
            <div >
            </div><br />
            <div className="footer__copyright">
                <small>Design & Developed by <a href='https://www.instagram.com/the_rishu0p/'> Rishu </a></small><br />
                <small>&copy; ironandwash.com</small>
            </div>
        </div>
    )
}

export default Support