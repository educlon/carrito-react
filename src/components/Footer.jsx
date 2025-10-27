import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-4">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">Super Shop</p>
            <p className="mb-0">Castro Barros 1005, Córdoba, Argentina</p>
          </Col>
          <Col md={6}>
            <div>
              <a href="https://www.facebook.com/supershopcba/?locale=es_LA" className="text-white me-3" target="_blank">
                <i className="fa fa-facebook fa-1x"></i>
              </a>
              <a href="https://www.instagram.com/supershopcba/" className="text-white me-3" target="_blank">
                <i className="fa fa-twitter fa-1x"></i>
              </a>
              <a href="https://x.com/SuperShopGlobal" className="text-white" target="_blank">
                <i className="fa fa-instagram fa-1x"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;