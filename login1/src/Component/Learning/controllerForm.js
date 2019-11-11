import React, { Component } from "react";
import { ErrorBoundery } from ".";
class controllerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handelChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    alert("You have submitted the input successfully :" + this.state.value);

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <ErrorBoundery>
          <h5>Controlled Form Example</h5>
          <form onClick={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <button>Submit</button>
          </form>
        </ErrorBoundery>
        >
      </div>
    );
  }
}

export default controllerForm;
