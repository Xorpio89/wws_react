import React, { Component } from "react";
import { Nav, NavLink } from "reactstrap";

class Sidebar extends Component {
  render() {
    return (
      <div className="col-xl-2">
        <Nav vertical>
          <NavLink href="/umsatzerfassen">Umsatz erfassen</NavLink>
          <NavLink href="/umsatzliste">Umsatzliste</NavLink>
          <NavLink href="/dekadenliste">Dekadenliste</NavLink>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
