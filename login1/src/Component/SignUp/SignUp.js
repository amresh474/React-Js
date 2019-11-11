import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);

    let payload = {
      mobile: data.get("mobile"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password")
    };
    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    alert("Your account is created successfully.");
    // browserHistory.push('/login');
    this.props.history.push("/Login");
  };

  render() {
    return (
      <div container="">
              <div class="jumbotron">  
        <header>
          <h1>Space Teddy Inc.</h1>
        </header>
        <nav aria-labelledby="mainnavheader">
          <h2 id="mainnavheader">Navigation Menu</h2>
        </nav>

        <main>
          <article>
            <div className="wrapper">
              <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="firstName">
                    <label htmlFor="firstname">First name:</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      // name="firstName"
                      id="firstName"
                    />
                    <br />
                  </div>

                  <div className="lastName">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      placeholder="last Name"
                      // name="lastName"
                      id="lastName"
                    />
                    <br />
                  </div>

                  <div className="mobile">
                    <label htmlFor="mobile">Mobile:</label>
                    <input
                      type="text"
                      placeholder="mobile"
                      // name="mobile"
                      id="mobile"
                    />
                    <br />
                  </div>

                  <div className="email">
                    <label htmlFor="email">Email Name</label>
                    <input
                      type="email"
                      className=""
                      placeholder="email"

                      // name="email"
                    />
                  </div>

                  <div className="content-section implementation">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      placeholder="password"
                      // name="password"
                      id="password"
                    />
                  </div>
                  <br />

                  <div className="createAccount">
                    <button type="submit" className="btn btn-primary">
                      Create Account
                    </button>
                    <br />
                    <small>Already Have an Account?</small>
                  </div>
                </form>
              </div>
            </div>
          </article>
          <aside aria-labelledby="latestheader">
            <h3 id="latestheader">Latest Articles</h3>
            <ul>
              <li>
                <a href="#">Latest Article Title 1</a>
              </li>
              <li>
                <a href="#">Latest Article Title 2</a>
              </li>
              <li>
                <a href="#">Latest Article Title 3</a>
              </li>
            </ul>
          </aside>
        </main>

        <footer>
          <p>© SpaceTeddy Inc.</p>
        </footer>
      </div>
      </div>

    );
  }
}

export default withRouter(SignUp);
