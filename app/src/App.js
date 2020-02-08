import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";

import "App.css";

import store from 'middleware'
import drizzleOptions from "drizzleOptions";
import Routes from "routes/Routes";
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

class App extends Component {

  render() {
    return (
      <DrizzleProvider store={store} options={drizzleOptions}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <CssBaseline />
            <LoadingContainer>
                <Routes />
            </LoadingContainer>
          </React.Fragment>
        </ThemeProvider>
      </DrizzleProvider>
    );
  }
}

export default App;