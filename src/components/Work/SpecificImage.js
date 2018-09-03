import React, { Component, Fragment } from "react";
import ThemeContext from "../../Theme";
import { withRouter } from "react-router-dom";
import Loading from "./Loading";
import ImageFocused from "./ImageFocused";

class SpecificImage extends Component {
  state = {
    targetIndex: { id: 0 }
  };
  componentDidMount() {
    if (this.props.value.length === 0) {
      //   //   console.log("Component Did Mount checks for 0 length");
      //   console.log("component did mount", this.props.value);
      return;
    } else if (this.props.value.length !== 0) {
      let { value } = this.props;
      let { id } = this.props.match.params;
      let targetIndex = value[value.findIndex(image => image.id === id)];
      this.setState({ targetIndex });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      //   console.log(
      //     "component will receive props",
      //     nextProps.value
      //     // "Component will receive props checks to see if the new props matches the old"
      //   );
      let { value } = nextProps;
      let { id } = this.props.match.params;
      let targetIndex = value[value.findIndex(image => image.id === id)];
      this.setState({ targetIndex });
    }
  }

  render() {
    // console.log(this.props.match.params.id);
    // console.log(this.props.value);
    let { value } = this.props;
    let { targetIndex } = this.state;
    return (
      <Fragment>
        {targetIndex.id === 0 ? (
          <Loading />
        ) : (
          <ImageFocused image={targetIndex} />
        )}
      </Fragment>
    );
  }
}
const NewImage = withRouter(SpecificImage);
const WrappedImage = () => (
  <ThemeContext.Consumer>
    {val => <NewImage value={val} />}
  </ThemeContext.Consumer>
);
export default WrappedImage;
