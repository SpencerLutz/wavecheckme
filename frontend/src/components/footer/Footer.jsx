import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css' 

const Footer = () => {
    return (
        <footer className="footer py-3 bg-dark text-white">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center">
                <span className="mr-3">About</span>
                <span className="mr-3"> | </span>
                <a href="https://2022.bit.camp/" className="text-white focus-none" target='_blank' rel='noopener noreferrer'>
                  Bitcamp 2022
                </a>
                <span className="mr-3"> | </span>
                <span> &copy; {new Date().getFullYear()} WaveCheck Me. All rights reserved.</span>
              </Col>
            </Row>
          </Container>
        </footer>
      );
};

export default Footer;