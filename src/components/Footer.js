import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function WebFooter() {
  return (
    <footer className="bg-dark text-white">
      <Container className="py-5">
        <Row>
          <Col lg={4} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">About Our Neapolitan Pizza</h5>
            <p>
              We serve the most delicious pizzas in town, using fresh ingredients and traditional recipes.
            </p>
            <div className="mt-4">
              <Button variant="light" className="me-2"><FaFacebookF /></Button>
              <Button variant="light" className="me-2"><FaTwitter /></Button>
              <Button variant="light"><FaInstagram /></Button>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <Form.Group className="mb-4">
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <ul className="list-unstyled">
              <li className="mb-3"><FaMapMarkerAlt /> 123 Pizza Street, Pizzaville, 12345</li>
              <li className="mb-3"><FaEnvelope /> contact@pizzawebsite.com</li>
              <li className="mb-3"><FaPhone /> +1 234 567 8900</li>
            </ul>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Opening Hours</h5>
            <Table bordered variant="dark">
              <tbody>
                <tr>
                  <td>Mon - Thu:</td>
                  <td>11am - 10pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>11am - 11pm</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>12pm - 9pm</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: <a className="text-white" href="https://pizzawebsite.com/">PizzaWebsite.com</a>
      </div>
    </footer>
  );
}

export default WebFooter;