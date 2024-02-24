
import React, { Component } from "react";
import { Router, Route, Routes as R } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <R>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Products" component={Products} />
        </R>
      </Router>
    )
  }
}
