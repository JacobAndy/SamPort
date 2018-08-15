import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
//Pipcorn
class App extends Component {
  state = {
    nav: [
      { nav: "HOME", to: "/" },
      { nav: "PRODUCTS", to: "/products" },
      { nav: "FIND US", to: "/contact" },
      { nav: "ABOUT US", to: "/about" }
    ]
  };
  render() {
    return (
      <Router>
        <div>
          <NavBar {...this.state} />
          {routes}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
