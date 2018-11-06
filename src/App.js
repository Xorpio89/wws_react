import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Container, Row } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Login from "./components/auth/Login";
import Navbar from "./components/navbars/AppNavbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/layout/Dashboard";
import Umsatzerfassen from "./components/layout/Umsatzerfassen";
import Umsatzplan from "./components/layout/Umsatzplan";
import Dekadenliste from "./components/layout/Dekadenliste";
import Retourenerfassen from "./components/layout/Retourenerfassen";
import Umsatzauswertung from "./components/layout/Umsatzauswertung";
import Warenerfassen from "./components/layout/Warenerfassen";
import Example from "./components/layout/Example";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Login} />
            <Container>
              <Row>
                <Switch>
                  <div className="col-12 col-md-3 col-xl-3">
                    <PrivateRoute component={Sidebar} />
                  </div>
                </Switch>
                <div className="col-12 col-md-9 col-xl-9">
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/dashboard"
                      component={Dashboard}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/umsatzerfassen"
                      component={Umsatzerfassen}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/umsatzplan"
                      component={Umsatzplan}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/umsatzauswertung"
                      component={Umsatzauswertung}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/warenerfassen"
                      component={Warenerfassen}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/dekadenliste"
                      component={Dekadenliste}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/retourenerfassen"
                      component={Retourenerfassen}
                    />
                  </Switch>
                  <Switch>
                    <PrivateRoute exact path="/example" component={Example} />
                  </Switch>
                </div>
              </Row>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
