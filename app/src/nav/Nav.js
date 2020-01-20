import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import ConsorciosContainer from "consorcios/ConsorciosContainer";
import CompetenciasEditContainer from "competencias/CompetenciasEditContainer";
import CompetenciasContainer from "competencias/CompetenciasContainer";

import ConsorcioEditContainer from "consorcios/ConsorcioEditContainer";

import SimpleForm from "containers/SimpleForm";
import Button from 'components/Button';

// import Redirect from "./components/redirect";
//import SayHello from "./components/sayHello";
// import NavBar from "./components/navbar";


function Nav() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={ConsorciosContainer}></Route>
        <Route path="/edit_competencias" exact component={CompetenciasEditContainer}></Route>
        <Route path="/edit_consorcios" exact component={ConsorcioEditContainer}></Route>
        <Route path="/competencias" exact component={CompetenciasContainer}></Route>
        <Route path="/form" exact component={SimpleForm}></Route>
        <Route path="/button" exact component={Button}></Route>
      </div>
    </BrowserRouter>
  );
}
export default Nav;
