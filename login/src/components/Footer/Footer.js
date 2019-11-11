import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Footer.css"
class Footer extends Component {
   
    render() { 
        return (
           
                 <footer className="footer">
                      <Container>
                          <Row>
                             <Col xs="6" sm="4">Buy</Col>
                             <Col xs="6" sm="4">About Us</Col>
                             <Col sm="4">Social media</Col>                            
                          </Row>
                          
                      </Container>
                 </footer>

        );
    }
}
 
export default Footer;