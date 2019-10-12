import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";

import "./App.css";

import store from './middleware'
import drizzleOptions from "./drizzleOptions";
import Nav from "./nav/Nav";

class App extends Component {
  render() {
    return (
      <DrizzleProvider store={store} options={drizzleOptions}>
        <LoadingContainer>
          <Nav />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
