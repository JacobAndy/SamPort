import React, { Component } from "react";
import "./style/Work.css";
import axios from "axios";
import Loading from "./Loading";
class Work extends Component {
  state = {
    feed: []
  };
  componentDidMount() {
    //context api so this doesnt fire every time someone reloads the page
    //to prevent to many calls to instagram api
    //make home page mobile responsive
    //add more to find me, about me
    //clean up home page landing for more intro
    // axios
    //   .get
    //   `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
    //     process.env.REACT_APP_INSTAGRAM_CONNECTION_KEY
    //   }`
    //   ()
    //   .then(instagram =>
    //     //  console.log(instagram.data.data)
    //     this.setState({
    //       feed: instagram.data.data
    //     })
    //   )
    //   .catch(console.log);
  }
  render() {
    let { feed } = this.state;
    let iteratedFeed = feed.map((image, index) => {
      let display = setTimeout(() => (display = "flex"), index * 100);

      return (
        <a href={image.link}>
          <div
            key={image.id}
            className="individual_image"
            style={{
              backgroundImage: `url(${image.images.low_resolution.url})`,
              display: "flex"
            }}
          >
            {/* Check for carousel_media */}
            <div className="individual_image__hover">
              <div className="individual_image__hover__likes">
                <i className="fa fa-heart fa-2x" />
                <h4>{image.likes.count}</h4>
              </div>

              <div className="individual_image__hover__comments">
                <i class="fa fa-comment fa-2x" />
                <h4>{image.comments.count}</h4>
              </div>
            </div>
          </div>
        </a>
      );
    });
    return (
      <div className="picture-frame">
        {feed.length === 0 ? <Loading /> : iteratedFeed}
      </div>
    );
  }
}
export default Work;
