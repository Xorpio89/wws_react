import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CardHeader,
  Button,
  UncontrolledTooltip,
  InputGroupAddon,
  InputGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Umsatzerfassen extends Component {
  state = {
    filiale: "",
    kasse: "",
    datum: "",
    safebagnr: "",
    aufladerabatt: "",
    baraufladung: "",
    kdkartenzahlung: "",
    bonvito: "",
    anzahlkunden: "",
    gesamtumsmwst: "",
    ums0: "",
    ums7: "",
    ums19: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const newClient = this.state;
    console.log(newClient);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    let kassenOptions = "";

    if (this.state.filiale === "altona") {
      kassenOptions = (
        <Input
          type="select"
          name="kasse"
          id="kasse"
          value={this.state.kasse}
          defaultValue="Altona 1"
          onChange={this.onChange}
        >
          <option value="Altona 1">Altona 1</option>
          <option>Altona 2</option>
          <option>Altona 3</option>
        </Input>
      );
    } else if (this.state.filiale === "barmbek") {
      kassenOptions = (
        <Input
          type="select"
          name="kasse"
          id="kasse"
          value={this.state.kasse}
          onChange={this.onChange}
        >
          <option>Barmbek 1</option>
          <option>Barmbek 2</option>
        </Input>
      );
    } else {
      kassenOptions = (
        <Input
          type="select"
          name="kasse"
          id="kasse"
          value={this.state.kasse}
          onChange={this.onChange}
        >
          <option> Bitte zuerst Filiale auswählen</option>
        </Input>
      );
    }

    return (
      <React.Fragment>
        <Row>
          <Col>
            <Link to="/dashboard">
              <FontAwesomeIcon icon="arrow-circle-left" /> Zurück zum Dashboard
            </Link>
          </Col>
        </Row>
        <br />
        <Card>
          <CardHeader tag="h4">
            <Row>
              <Col>Umsatz erfassen</Col>
              <Col sm={{ offset: 1 }}>
                <FontAwesomeIcon id="print" icon="print" />{" "}
                <UncontrolledTooltip placement="left" target="print">
                  Jetzt drucken
                </UncontrolledTooltip>
                <FontAwesomeIcon id="pdf" icon="file-pdf" />
                <UncontrolledTooltip placement="right" target="pdf">
                  Jetzt PDF herunterladen
                </UncontrolledTooltip>
              </Col>
            </Row>
          </CardHeader>
          <CardTitle />
          <CardBody>
            <Form>
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="filiale">Filiale</Label>
                  </Col>
                  <Col>
                    <Input
                      type="select"
                      name="filiale"
                      id="filiale"
                      value={this.state.filiale}
                      onChange={this.onChange}
                    >
                      <option disabled value="">
                        Filiale auswählen
                      </option>
                      <option value="altona">Altona</option>
                      <option value="barmbek">Barmbek</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="kasse">Kasse</Label>
                  </Col>
                  <Col>{kassenOptions}</Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="datum">Datum</Label>
                  </Col>
                  <Col>
                    <Input
                      type="date"
                      name="datum"
                      id="datum"
                      placeholder="Bitte wählen Sie ein Datum aus"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="safebagnr">Safebag-Nr</Label>
                  </Col>
                  <Col>
                    <Input type="text" name="safebagnr" id="safebagnr" />
                  </Col>
                </Row>
              </FormGroup>
              <hr />
              <br />
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="aufladerabatt">Aufladerabatt</Label>
                  </Col>
                  <Col>
                    <Input
                      type="number"
                      name="aufladerabatt"
                      id="aufladerabatt"
                      value={this.state.aufladerabatt}
                      onChange={this.onChange}
                      placeholder="0.00"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="baraufladung">Bar Aufladung</Label>
                  </Col>
                  <Col>
                    <Input
                      type="number"
                      name="baraufladung"
                      id="baraufladung"
                      placeholder="0.00"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <hr />
              <br />
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="kdkartenzahlung">KD-Karte Zahlung</Label>
                  </Col>
                  <Col>
                    <Input
                      type="number"
                      name="kdkartenzahlung"
                      id="kdkartenzahlung"
                      placeholder="0.00"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="bonvito">bonVito Rabatt</Label>
                  </Col>
                  <Col>
                    <Input
                      type="number"
                      name="bonvito"
                      id="bonvito"
                      placeholder="0.00"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <hr />
              <br />
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="anzahlkunden">Anzahl Kunden</Label>
                  </Col>
                  <Col>
                    <Input
                      type="number"
                      name="anzahlkunden"
                      id="anzahlkunden"
                      placeholder="0"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <hr />
              <br />
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="gesamtumsmwst">Gesamtumsatz MwSt</Label>
                  </Col>
                  <Col>
                    <InputGroup>
                      <Input
                        type="number"
                        name="gesamtumsmwst"
                        id="gesamtumsmwst"
                        placeholder="0.00"
                      />
                      <InputGroupAddon addonType="append">€</InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </FormGroup>
              <hr />
              <br />
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="ums0">Umsatz 0%</Label>
                  </Col>
                  <Col>
                    <InputGroup>
                      <Input
                        type="number"
                        name="ums0"
                        id="ums0"
                        placeholder="0.00"
                      />
                      <InputGroupAddon addonType="append">€</InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="ums7">Umsatz 7%</Label>
                  </Col>
                  <Col>
                    <InputGroup>
                      <Input
                        type="number"
                        name="ums7"
                        id="ums7"
                        placeholder="0.00"
                      />
                      <InputGroupAddon addonType="append">€</InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={3}>
                    <Label for="ums19">Umsatz 19%</Label>
                  </Col>
                  <Col>
                    <InputGroup>
                      <Input
                        type="number"
                        name="ums19"
                        id="ums19"
                        placeholder="0.00"
                      />
                      <InputGroupAddon addonType="append">€</InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </FormGroup>
              <Button color="info" block>
                Umsatz speichern{" "}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Umsatzerfassen;
