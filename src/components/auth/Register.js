import React, { Component } from 'react';
import {
    Container,
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input 
} from 'reactstrap';

class AppLogin extends Component {
constructor() {
    super();
    this.state = {
        email: '',
        password: '',
        errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onChange = this.onSubmit.bind(this);
}

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(user);
    }

    onChange(e) {
        this.setState({ [e.target.email]: e.target.value });
    }

    render() {
        return (
            <Container>
                <div className="register">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <Label for="email" sm={2}>E-Mail</Label>
                                <Col sm={4}>
                                    <Input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="E-Mail"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </Col>                   
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Passwort</Label>
                                <Col sm={4}>
                                    <Input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Passwort"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    />
                                </Col>
                        </FormGroup>
                        <Button color="success">Login</Button>{''}
                    </Form>
                </div>
            </Container>
        )
    }

}

export default AppLogin;