import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import CompetenciasContainer from "../competencias/competenciasContainer";

// import Redirect from "./components/redirect";
//import SayHello from "./components/sayHello";
// import NavBar from "./components/navbar";


function Nav() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={CompetenciasContainer}></Route>
      </div>
    </BrowserRouter>
  );
}
export default Nav;
