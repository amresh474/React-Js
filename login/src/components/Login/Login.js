import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "../../Auth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { setLoggedInUser } from "../../Redux/Actions";

import "./Login.css";
import axios from 'axios';

class ConnectedLogin extends Component {
  state = {
    userName: "",
    pass: "",
    redirectToReferrer: false
  };
 
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    // If user was authenticated, redirect her to where she came from.
    if (this.state.redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

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
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                value={this.state.userName}
                placeholder="User name"
                onChange={e => {
                  this.setState({ userName: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                value={this.state.pass}
                type="password"
                placeholder="Password"
                onChange={e => {
                  this.setState({ pass: e.target.value });
                }}
              />
            </FormGroup>
          </Form>

          <Button
            style={{ marginTop: 10 }}
            variant="outlined"
            color="primary"
            onClick={event => this.handleClick(event)}
            onClick={() => {
              // Authenticate the user using entered credentials.
              Auth.authenticate(this.state.userName, this.state.pass, user => {
                // Authentication failed.
                if (!user) {
                  this.setState({ wrongCred: true });
                  return;
                }

                // If we get here, authentication was success.
                this.props.dispatch(setLoggedInUser({ name: user.name }));
                this.setState(() => ({
                  redirectToReferrer: true
                }));
              });
            }}
          >
            Log in
          </Button >
          {this.state.wrongCred && (
            <div style={{ color: "red" }}>Wrong username and/or password</div>
          )}
        </div>
      </div>
    );
  }
}
const Login = withRouter(connect()(ConnectedLogin));

export default Login;
