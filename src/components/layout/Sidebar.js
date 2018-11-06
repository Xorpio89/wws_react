import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavLink } from "reactstrap";

class Sidebar extends Component {
  render() {
    return (
      <Nav vertical>
        <Link className="btn btn-info" to="/dashboard">
          Dashboard
        </Link>
        <NavLink className="nav-link">
          <Link to="/umsatzerfassen">Umsatz erfassen</Link>
        </NavLink>
        <Link className="nav-link" to="/umsatzplan">
          Umsatzplan
        </Link>
        <NavLink href="/umsatzauswertung">Umsatzauswertung</NavLink>
        <NavLink href="/warenerfassen">Waren erfassen</NavLink>
        <NavLink href="/dekadenliste">Dekadenliste</NavLink>
        <NavLink href="/retourenerfassen">Retouren erfassen</NavLink>
        <Link className="nav-link" to="/example">
          Example UI
        </Link>
      </Nav>
    );
  }
}

export default Sidebar;
