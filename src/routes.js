import React from "react";
import { Switch, Route } from "react-router-dom";
{
  /*
    unfinished routes, place holders for components
    */
}
export default (
  <Switch>
    {/*
    each product
    */}
    <Route
      exact
      path="/products/:id"
      component={() => <h1>Products Page ID</h1>}
    />

    <Route path="/products" component={() => <h1>Products Page</h1>} />

    <Route path="/contact" component={() => <h1>Contact Page</h1>} />
    <Route path="/about" component={() => <h1>About Page</h1>} />
    <Route path="/" component={() => <h1>Home Page</h1>} />
  </Switch>
);
