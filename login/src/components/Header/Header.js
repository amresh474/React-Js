import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  Button,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Person from "@material-ui/icons/PersonOutline";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  showCartDlg,
  toggleMenu,
  setLoggedInUser,
  setCheckedOutItems
} from "../../Redux/Actions";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

const mapStateToProps = state => {
  return {
    // nrOfItemsInCard: state.cartItems.length,
    loggedInUser: state.loggedInUser
  };
};

class ConnectedHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      anchorEl: null
    };
  }

  render() {
    let { anchorEl } = this.state;
    return (
      <div>
        <Navbar color="#000000" bg-dark Black expand="md">
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">
                  <i class="fas fa-home-lg-alt"></i>Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>

          <Nav className="ml-auto" navbar>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchTerm}
                onChange={e => {
                  this.setState({ searchTerm: e.target.value });
                }}
              />

              <Button
                style={{ marginLeft: 20 }}
                variant="outlined"
                color="primary"
                onClick={() => {
                  this.props.history.push(
                    "/search/?category=" + this.state.searchTerm
                  );
                }}
              >
                {" "}
                Search
              </Button>
            </form>
            <NavItem className="Login">
              <Button color="Primary" variant="outlined">
                {!this.props.loggedInUser ? (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      this.props.history.push("/Login1");
                    }}
                  >
                    Log in
                  </Button>
                ) : (
                  <Avatar
                    onClick={event => {
                      this.setState({ anchorEl: event.currentTarget });
                    }}
                    style={{ backgroundColor: "#3f51b5", marginRight: 10 }}
                  >
                    <Person />
                  </Avatar>
                )}
              </Button>
            </NavItem>
            <NavItem className="Signup">
              <Button
                variant="outlined"
                style={{ marginRight: 10 }}
                color="primary"
                onClick={() => {
                  this.props.history.push("/SignUp");
                }}
              >
                SignUp
              </Button>
            </NavItem>

            <NavItem className="cart-icon">
              <i className="fas fa-cart-plus"></i>
              <NavLink href="/"></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
const Header = withRouter(connect(mapStateToProps)(ConnectedHeader));
export default Header;
