import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Button ,Card} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (


      <Card style={{ width: '28rem' }}>
        
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={3}>
            Password
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="primary" type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
      </Card> 
    );
  }
}

export default Login;
