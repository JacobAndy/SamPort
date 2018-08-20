import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let navBar = this.props.nav.map(e => {
      return (
        <Link to={e.to} key={e.to}>
          <div className="navBar__headings__sections">
            <h2
              className={
                this.props.location.pathname === e.to
                  ? "activeNav"
                  : "inactiveNav"
              }
              key={e.nav}
            >
              {e.nav}
            </h2>
          </div>
        </Link>
      );
    });
    return (
      <header className="navBar">
        <div className="navBar__companyName">
          <Link to="/">
            <h1>SAM ANDERSON</h1>
          </Link>
        </div>
        <section className="navBar__headings">{navBar}</section>
      </header>
    );
  }
}
export default withRouter(Navbar);
