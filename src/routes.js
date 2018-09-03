import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import SpecificImage from "./components/Work/SpecificImage";

export default (
  <Switch>
    <Route exact path="/display/:id" component={SpecificImage} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />

    <Route exact path="/display" component={Work} />

    <Route path="/" component={Home} />
  </Switch>
);
