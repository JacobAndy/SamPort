import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
import { withRouter } from "react-router-dom";

function Navbar(props) {
  console.log(props);
  let navBar = props.nav.map(e => {
    return (
      <Link to={e.to} key={e.to}>
        <h2
          className={
            props.location.pathname === e.to ? "activeNav" : "inactiveNav"
          }
          key={e.nav}
        >
          {e.nav}
        </h2>
      </Link>
    );
  });
  return (
    <header className="navBar">
      <div className="navBar__companyName">
        <Link to="/">
          <h1>TEMPLATE</h1>
        </Link>
      </div>
      <section className="navBar__headings">{navBar}</section>
    </header>
  );
}
export default withRouter(Navbar);
