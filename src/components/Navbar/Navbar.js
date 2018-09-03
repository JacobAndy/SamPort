import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      burger: ""
    };
  }

  render() {
    let { burger } = this.state;
    let navBar = this.props.nav.map(e => {
      return (
        <Link to={e.to} key={e.to}>
          <div
            className="navBar__headings__sections"
            onClick={() => {
              if (typeof burger === "string") return;
              else return this.setState({ burger: false });
            }}
          >
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
        <div className="navBar__companyName" id="company-name">
          <Link to="/">
            <h1>Gannon Gager</h1>
          </Link>
        </div>
        <i
          className={
            "fa fa-angle-double-down fa-2x navBar__arrow " +
            (burger.length === 0
              ? ""
              : burger
                ? "navBar__arrow__active"
                : "navBar__arrow__static")
          }
          onClick={() => this.setState({ burger: !burger })}
        />

        <section
          className={
            typeof burger === "string"
              ? "navBar__headings"
              : burger
                ? "navBar__headings__active"
                : "navBar__headings__inactive"
          }
        >
          {navBar}
          <div className="navBar__social-icons">
            <a href="">
              <i className="fa fa-facebook-f" />
            </a>
            <a href="">
              <i className="fa fa-instagram" />
            </a>
            <a href="">
              <i className="fa fa-twitter" />
            </a>
            <a href="">
              <i className="fa fa-pinterest-p" />
            </a>
          </div>
        </section>
      </header>
    );
  }
}
export default withRouter(Navbar);
