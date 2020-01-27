import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchContainer from "containers/SearchContainer";

import ConsorciosContainer from "consorcios/ConsorciosContainer";
import EditContainer from "containers/EditContainer";
import CompetenciasContainer from "competencias/CompetenciasContainer";

import ConsorcioEditContainer from "consorcios/ConsorcioEditContainer";
import MainContainer from "containers/MainContainer";

// import Redirect from "./components/redirect";
//import SayHello from "./components/sayHello";
// import NavBar from "./components/navbar";

class Routes extends React.Component {
  state = { open: false };

  handleDrawerOpen = () => {
    console.log("Stating");
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    // Se debe pasar open siempre que sea necesario para desbordar la pantalla
    return (
      <Router>
        <Route
          exact
          render={() => (
            <MainContainer
              handleDrawerClose={this.handleDrawerClose}
              handleDrawerOpen={this.handleDrawerOpen}
              open={open}
            />
          )}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <SearchContainer open={open} />}
          />

          <Route
            path="/consorcio/:id"
            exact
            component={ConsorciosContainer}
          ></Route>
          <Route
            path="/edit"
            exact
            component={EditContainer}
          ></Route>
          <Route
            path="/edit"
            exact
            component={ConsorcioEditContainer}
          ></Route>
          <Route
            path="/certificado/:id"
            exact
            component={CompetenciasContainer}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
