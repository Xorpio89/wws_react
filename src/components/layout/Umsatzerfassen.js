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
  Button
} from "reactstrap";

class Umsatzerfassen extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const newClient = this.state;
    console.log(newClient);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
        <Row>
          <Link to="/dashboard">Zurück zum Dashboard</Link>
        </Row>
        <Card>
          <CardHeader tag="h4">Umsatz erfassen</CardHeader>
          <CardTitle />
          <CardBody>
            <Form>
              <FormGroup>
                <Row>
                  <Col md={2}>
                    <Label for="feld1">Feld 1</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="feld1"
                      id="feld1"
                      placeholder="Bitte tragen Sie Feld1 ein"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={2}>
                    <Label for="feld2">Feld 2</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="feld2"
                      id="feld2"
                      placeholder="Bitte tragen Sie Feld2 ein"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={2}>
                    <Label for="feld3">Feld 3</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="feld3"
                      id="feld3"
                      placeholder="Bitte tragen Sie Feld3 ein"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={2}>
                    <Label for="feld4">Feld 4</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="feld4"
                      id="feld4"
                      placeholder="Bitte tragen Sie Feld4 ein"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={2}>
                    <Label for="feld5">Feld 5</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="feld5"
                      id="feld5"
                      placeholder="Bitte tragen Sie Feld5 ein"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={2}>
                    <Label for="feld1">Feld 1</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="feld1"
                      id="feld1"
                      placeholder="Bitte tragen Sie Feld1 ein"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <Button color="info" block>
                Save{" "}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Umsatzerfassen;
