import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
//Pipcorn
class App extends Component {
  state = {
    nav: [
      { nav: "HOME", to: "/" },
      { nav: "MY WORK", to: "/display" },
      { nav: "FIND ME", to: "/contact" },
      { nav: "ABOUT ME", to: "/about" }
    ]
  };
  render() {
    return (
      <Router>
        <div onScroll={e => console.log("hello")}>
          <NavBar {...this.state} />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
