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
  FormText
} from "reactstrap";

export class Example extends Component {
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
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="exampleAddress"
                  placeholder="1234 Main St"
                />
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                  Select
                </Label>
                <Col sm={10}>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelectMulti" sm={2}>
                  Select Multiple
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input
                  type="text"
                  name="address2"
                  id="exampleAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
              <FormGroup tag="fieldset" row>
                <Col sm={10}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio2" /> Option one is this
                      and that—be sure to include why it's great
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio2" /> Option two can be
                      something else and selecting it will deselect option one
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input type="radio" name="radio2" /> Option three
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" id="exampleState" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" id="exampleZip" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
                <Label for="exampleCheck" check>
                  Check me out
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
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

export default Example;
