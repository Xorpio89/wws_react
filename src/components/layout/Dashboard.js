import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 class="bd-title" id="dashboard">
          Dashboard
        </h1>
        <p>
          Willkommen auf Ihrem Dashboard! Bitte wählen Sie aus den folgenden
          Aktionen
        </p>
        <Button color="dark" block>
          <Link className="text-white" to="umsatzerfassen">
            Jetzt neuen Umsatz erfassen
          </Link>
        </Button>
        <Button color="success" block>
          <Link className="text-white" to="umsatzplan">
            Umsatzplan anzeigen
          </Link>
        </Button>
        <Button color="warning" block>
          <Link className="text-dark" to="umsatzauswertung">
            Umsatzauswertung einsehen
          </Link>
        </Button>
        <Button color="primary" block>
          <Link className="text-white" to="warenerfassen">
            Jetzt Waren erfassen!
          </Link>
        </Button>
        <Button color="secondary" block>
          <Link className="text-white" to="dekadenliste">
            Dekadenliste öffnen
          </Link>
        </Button>
        <Button color="danger" block>
          <Link className="text-white" to="retourenerfassen">
            Jetzt Retoure erfassen
          </Link>
        </Button>
        <hr />
        <Button color="info" block>
          <Link className="text-white" to="example">
            Beispiel Formular öffnen
          </Link>
        </Button>
      </div>
    );
  }
}

export default Dashboard;
