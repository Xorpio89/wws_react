import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="" onClick={this.onLogoutClick.bind(this)}>
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    );

    const guestLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="http://dev-hamburg.de">DevHamburg</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Login</NavLink>
        </NavItem>
      </Nav>
    );

    return (
      <div>
        <Navbar
          // style={{ backgroundColor: "#536f82" }}
          color="dark"
          dark
          expand="sm"
          className="mb-5 dark1"
        >
          <Container>
            <NavbarBrand href="/">Waren Wirtschafts System</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AppNavbar);
