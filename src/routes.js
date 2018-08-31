import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Work from "./components/Work/Work";

export default (
  <Switch>
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/display" component={Work} />
    <Route path="/" component={Home} />
  </Switch>
);
