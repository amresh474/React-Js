import React, { useState, Component } from "react";

import { Button } from "reactstrap";
import OTPInput, { ResendOTP } from "otp-input-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ConnectedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OTP: "",
      redirectToReferrer: false
    };
  }
  handleChange = otp => {
    this.setState({ OTP: otp });
    console.log(this.state.OTP);
  };
  handleClick = () => {
    if (this.state.OTP) {
      this.props.history.push({
        pathname: "/SignUp",
        state: {
          mobile: this.props.mobile
        }
      });
    }
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <h5>OTP Input React</h5>
        <div>
          <OTPInput
            autoFocus
            OTPLength={7}
            otpType="number"
            value={this.state.OTP}
            // onChange={otp => console.log(otp)}
            onChange={this.handleChange}
            disabled={false}
            secure
            inputStyles={{
              border: 0,
              borderBottom: "1px solid #cbcbcb"
            }}
          />
          <ResendOTP onClick={this.handelResendClick} />
          <Button
            style={{ marginTop: 10 }}
            variant="outlined"
            color="primary"
            onClick={this.handleClick}
            
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

const App = withRouter(connect()(ConnectedApp));

export default App;
