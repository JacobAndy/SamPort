import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import SpecificImage from "./components/Work/SpecificImage";
import Four04 from "./components/404/404";

export default (
  <Switch>
    <Route exact path="/display/:id" component={SpecificImage} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/about" component={About} />

    <Route exact path="/display" component={Work} />

    <Route exact path="/" component={Home} />
    <Route path="*" component={Four04} />
  </Switch>
);
