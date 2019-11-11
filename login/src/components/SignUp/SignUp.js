import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./SignUp.css";

class ConnectedSignUp extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      mobile: "",
      pass: "",
      Email: "",
      redirectToReferrer: false
    };
  }
  handleSubmit = () => {
  console.log(this.state.FirstName +" "+this.state.LastName);
  
    this.props.history.push({
      pathname: "/"
    });
  };

  render() {
    const { mobile } = this.props.location.state;

    return (
      <div className="SignUp-container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleFirstName">Mobile No</Label>
            <Input
              value={mobile}
              placeholder="mobile"
              // type="number"
              onChange={this.props.onChange}
              // onChange={e => {
              //   this.setState({ mobile: e.target.value });
              // }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFirstName">First Name</Label>
            <Input
              value={this.state.FirstName}
              placeholder="First name"
              onChange={e => {
                this.setState({ FirstName: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleLastName">Last Name</Label>
            <Input
              value={this.state.LastName}
              placeholder="Last name"
              onChange={e => {
                this.setState({ LastName: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              value={this.state.Email}
              placeholder="abc123@gmail.com"
              type="Email"
              onChange={e => {
                this.setState({ Email: e.target.value });
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
          <Button
            style={{ marginTop: 10, marginLeft: 90 }}
            variant="outlined"
            color="primary"
          >
            {" "}
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const SignUp = withRouter(connect()(ConnectedSignUp));
export default SignUp;
