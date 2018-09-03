import React, { Component, Fragment } from "react";
import "./style/Work.css";
// import axios from "axios";
import Loading from "./Loading";
import ThemeContext from "../../Theme";
import MappedImage from "./MappedImage";
import { withRouter } from "react-router-dom";

class Work extends Component {
  componentDidMount() {
    console.log(this.props.value);
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
