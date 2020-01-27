import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";

import "App.css";

import store from 'middleware'
import drizzleOptions from "drizzleOptions";
import Routes from "routes/Routes";

class App extends Component {

  render() {
    return (
      <DrizzleProvider store={store} options={drizzleOptions}>
        <LoadingContainer>
            <Routes />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;