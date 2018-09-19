import React, { Component, Fragment } from "react";
import "./style/Work.css";
// import axios from "axios";
import Loading from "./Loading";
import ThemeContext from "../../Theme";
import MappedImage from "./MappedImage";
import { withRouter } from "react-router-dom";

class Work extends Component {
  componentDidMount() {
    if (window.scrollY !== 0) {
      console.log("it is not 0");
      // window.scroll({ top: 0, behavior: "smooth" });
    } else {
      console.log(window);
    }
  }
  render() {
    console.log(this.props);
    let { value, location } = this.props;
    let { search } = location;
    let iteratedFeed = value.map((image, index) => (
      <MappedImage key={image.id} image={image} />
    ));
    return (
      <div className="picture-frame">
        {value.length === 0 ? <Loading /> : iteratedFeed}
      </div>
    );
  }
}
const NewWork = withRouter(Work);
const WrappedWork = () => (
  <ThemeContext.Consumer>
    {val => <NewWork value={val} />}
  </ThemeContext.Consumer>
);

export default WrappedWork;
