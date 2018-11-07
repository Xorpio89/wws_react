import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

class Sidebar extends Component {
  render() {
    return (
      <Nav vertical>
        <Link className="btn btn-info" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-link" to="/umsatzerfassen">
          Umsatz erfassen
        </Link>
        <Link className="nav-link" to="/umsatzplan">
          Umsatzplan
        </Link>
        <Link className="nav-link" to="/umsatzauswertung">
          Umsatzauswertung
        </Link>
        <Link className="nav-link" to="/warenerfassen">
          Waren erfassen
        </Link>
        <Link className="nav-link" to="/dekadenliste">
          Dekadenliste
        </Link>
        <Link className="nav-link" to="/retourenerfassen">
          Retouren erfassen
        </Link>
        <Link className="nav-link" to="/example">
          Example UI
        </Link>
      </Nav>
    );
  }
}

export default Sidebar;
