import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import logo from '../Assets/logo.png'
import { IoCall } from "react-icons/io5";

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwkvQf2N7W0OiRzfW8ja9C_VI5H9pSpxOR9piA-JD_U2AgeyzJJilLHjCcWaK5U62Pyeg/exec",

      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
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
              <Nav.Link href="/">Pricing</Nav.Link>
              <Nav.Link href="#Support">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='form-face'>
        <h3 className='title'><strong>Schedule Pickup Now</strong></h3><br />
        <p className='header'></p><br />
        <div>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <div className='form-starter'>
              <div className="label-select">
                <label>Your Name</label><br />
                <input className='label' placeholder="Name" name="Name" type="text" required />
              </div>
              <div className="label-select">
                <label>Mobile Number</label><br />
                <input className='label' placeholder="Mobile Number" name="Mobile_Number" type="number" required />
              </div>
              <div className="label-select">
                <label>Address</label><br />
                <input className='label' placeholder="Address" name="Address" type="text" required />
              </div>
              <div className="label-select">
                <label for="cars">Pickup time</label><br />
                <select name="Pickup_time" required>
                  <option className='label-option' value="6:00PM - 7:00PM">6:00PM - 7:00PM</option>
                  <option className='label-option' value="7:00PM - 8:00PM">7:00PM - 8:00PM</option>
                </select><br /><br />
              </div>
              <div className="label-select">
                <label for="cars">Service Type</label><br />
                <select name="Service" required>
                  <option className='label-option' value="Wash & Iron"> Wash & Iron </option>
                  <option className='label-option' value="Iron Only"> Iron Only </option>
                  <option className='label-option' value="Dry Clean"> Dry Clean </option>
                  <option className='label-option' value="Shoe Cleaning"> Shoe Cleaning </option>
                </select><br /><br />
              </div>
              <div className="label-select">
                <label>No. of Items</label><br />
                <input className='label' placeholder="Count" name="Count" type="number" required />
              </div>
              <div className="label-select">
                <label>Any Note</label><br />
                <input className='label-note' placeholder="Note" name="Note" type="text" />
              </div><br />
              <input className='sch-button' type="submit" />
            </div>
          </form>
        </div>
      </div><br />
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
      </Container><br />
      <div className="footer__copyright">
        <small>Design & Developed by <a href='https://www.instagram.com/the_rishu0p/'> Rishu </a></small><br />
        <small>&copy; ironandwash.com</small>
      </div>
    </div>
  );
}

