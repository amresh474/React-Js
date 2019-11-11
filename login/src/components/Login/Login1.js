import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import "./Login.css";
import { baseService } from "../../_services/services";
import { urlConstants } from "../../_constant/url.constant";

import Otp from "./otp";
import { validator } from "../../utils/validator";

class ConnectedLogin1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      showComponent: false,
      redirectToReferrer: false
    };
  }
  handleChange = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ mobile: event.target.value });
    }
  };
  register = user => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json"
      },
      mobile: user
    };
    const url = `http://localhost:8080/${urlConstants.Login_SignUp}`;
    console.log(url);
    
    return baseService.postData(url, requestOptions).then(user);
  };

  _onButtonClick = event => {
    if (this.state.mobile) {
      this.register(this.state.mobile);
      this.setState({
        showComponent: true
      });
    } else {
      event.preventDefault();
    }
  };

  render() {
    return (
      <div className="login-container">
        <div
          style={{
            height: 200,
            width: 200,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              color: "#504F5A",
              marginBottom: 20,
              fontSize: 24,
              textAlign: "center"
            }}
          >
            {" "}
            Log in{" "}
          </div>
          <Form >
            <FormGroup>
              <Label for="exampleEmail">Mobile Number</Label>
              <Input
                value={this.state.mobile}
                placeholder="mobile number"
                size="10"
                // type="number"
                onChange={this.handleChange}
                required
                maxLength="10"
                className={this.state.showComponent ? "disable-input" : ""}
              />
            </FormGroup>
            {!this.state.showComponent ? (
            <Button
              style={{ marginTop: 10 }}
              variant="outlined"
              color="primary"
              onClick={this._onButtonClick}
            >
              Submit
            </Button>
          ) : null}
          {this.state.showComponent ? <Otp mobile={this.state.mobile} /> : null}
          </Form>
          
        </div>
      </div>
    );
  }
}
const Login1 = withRouter(connect()(ConnectedLogin1));

export default Login1;
