import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      yAxis: 0,
      activeBurger: false
    };
  }
  componentDidMount() {
    // console.log("Y offset", window.pageYOffset);
    window.addEventListener("scroll", e => {
      this.setState({ yAxis: window.pageYOffset });
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.yAxis !== prevState.yAxis) {
  //     console.log("difference");
  //   }
  // }
  render() {
    let { activeBurger } = this.state;
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
      <header className={this.state.yAxis < 40 ? "navBar big" : "navBar small"}>
        <div className="navBar__companyName">
          <div
            className="burger"
            id="burger"
            onClick={() =>
              this.setState({ activeBurger: !this.state.activeBurger })
            }
          >
            <div
              className={
                activeBurger
                  ? "burger__top burger__top__animated"
                  : "burger__top"
              }
            />
            <div
              className={
                activeBurger
                  ? "burger__middle burger__middle__animated"
                  : "burger__middle"
              }
            />
            <div
              className={
                activeBurger
                  ? "burger__bottom burger__bottom__animated"
                  : "burger__bottom"
              }
            />
          </div>
          <Link to="/">
            <h1>TEMPLATE</h1>
          </Link>
        </div>
        <section className="navBar__headings">{navBar}</section>
      </header>
    );
  }
}
export default withRouter(Navbar);
