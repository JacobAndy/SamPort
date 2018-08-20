import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

export default (
  <Switch>
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={() => <h1>About Page</h1>} />
    <Route path="/display" component={() => <h1>My Display</h1>} />
    <Route path="/" component={Home} />
  </Switch>
);
