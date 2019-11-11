import React, { Component } from "react";
class dashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside >
              <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a className="list-group-item" href="#">
                <i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home
              </a>
              <a className="list-group-item" href="/Userprofile">
                <i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;
                UserDetails
              </a>
              <a className="list-group-item" href="/Checkout">
              <i className="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; Cart
              </a>
              <a className="list-group-item" href="/SignUp">
                <i className="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; User
              </a>
              <a className="list-group-item" href="/Login">
                <i className="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp;
                Login
              </a>
              <a className="list-group-item" href="#">
                <i className="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp;
                Settings
              </a>
            </div>
          </div>

          <header>
            <div className="col-md-7">
              <nav className="navbar-default pull-left">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="offcanvas"
                    data-target="#side-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
              </nav>
              <div className="search hidden-xs hidden-sm">
                <input type="text" placeholder="Search" id="search" />
              </div>
            </div>
          </header>
        </div>
      </div>
      </aside>

    );
  }
}

export default dashBoard;
