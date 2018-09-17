import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import ThemeContext from "./Theme";
import axios from "axios";

class App extends Component {
  state = {
    nav: [
      { nav: "HOME", to: "/" },
      { nav: "MY WORK", to: "/display" },
      { nav: "FIND ME", to: "/contact" },
      { nav: "ABOUT ME", to: "/about" }
    ],
    feed: []
  };
  componentDidMount() {
    console.log("COMPONENT DID MOUNT HIT");
    axios
      .get
      // `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
      //   process.env.REACT_APP_INSTAGRAM_CONNECTION_KEY
      // }`
      ()

      .then(instagram =>
        this.setState({
          feed: instagram.data.data
        })
      )
      .catch(console.log);
  }

  render() {
    let { feed } = this.state;
    console.log(feed);
    return (
      <ThemeContext.Provider value={feed}>
        <Router>
          <div onScroll={e => console.log("hello")}>
            <NavBar {...this.state} />
            <div className="routes">{routes}</div>
            <Footer />
          </div>
        </Router>
      </ThemeContext.Provider>
    );
  }
}

export default App;
