import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";
import {Provider}  from 'react-redux';
import "App.css";

import drizzleOptions from "drizzleOptions";
import Routes from "routes/Routes";
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import {configureStore, store} from "middleware";
const apiStore = configureStore();
class App extends Component {

  render() {
    return (
      <DrizzleProvider store={store} options={drizzleOptions}>
        <Provider store={apiStore}>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <CssBaseline />
              <LoadingContainer>
                  <Routes />
              </LoadingContainer>
            </React.Fragment>
          </ThemeProvider>
        </Provider>
      </DrizzleProvider>
    );
  }
}

export default App;