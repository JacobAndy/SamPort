import React, { Component } from "react";
import "./style/ImageFocused.css";

class ImageFocused extends Component {
  state = {
    caption: this.props.image.caption.text,
    commentCount: this.props.image.comments.count,
    likeCount: this.props.image.likes.count,
    createdTime: new Date(this.props.image.created_time * 1000),
    image: this.props.image.carousel_media
      ? this.props.image.carousel_media
      : this.props.image.images,
    carousel_media: this.props.image.carousel_media ? true : false,
    imageCarousel: 0
  };
  getDate = () => {
    let { createdTime } = this.state;
    let month = createdTime.getMonth();
    const day = createdTime.getDay();
    const year = createdTime.getFullYear();
    if (month === 0) month = "January";
    else if (month === 1) month = "February";
    else if (month === 2) month = "March";
    else if (month === 3) month = "April";
    else if (month === 4) month = "May";
    else if (month === 5) month = "June";
    else if (month === 6) month = "July";
    else if (month === 7) month = "August";
    else if (month === 8) month = "September";
    else if (month === 9) month = "October";
    else if (month === 10) month = "November";
    else if (month === 11) month = "December";
    return `${month} ${day}, ${year}`;
  };
  render() {
    console.log(this.state);
    let {
      caption,
      commentCount,
      likeCount,
      createdTime,
      image,
      carousel_media,
      imageCarousel
    } = this.state;
    let currentImage = carousel_media
      ? image[imageCarousel].images.standard_resolution.url
      : image.standard_resolution.url;
    return (
      <div className="image">
        <div className="image__focused">
          <section
            onSwipe={e => console.log(e, "event")}
            style={{ backgroundImage: `url(${currentImage})` }}
          >
            {carousel_media &&
              imageCarousel !== 0 && (
                <div
                  onClick={() =>
                    this.setState({ imageCarousel: imageCarousel - 1 })
                  }
                  className="nextImageButton-left"
                >
                  <i className="fa fa-chevron-left" />
                </div>
              )}
            {/* <img src={currentImage} /> */}
            {carousel_media &&
              (imageCarousel < image.length - 1 && (
                <div
                  onClick={() =>
                    this.setState({ imageCarousel: imageCarousel + 1 })
                  }
                  className="nextImageButton-right"
                >
                  <i className="fa fa-chevron-right" />
                </div>
              ))}
          </section>
          <section>
            <h2>{caption}</h2>
            <div>
              <a href={this.props.image.link}>
                <i className="fa fa-link" />
              </a>
              <h4>Comments: {commentCount}</h4>

              <h4>Likes: {likeCount}</h4>

              <h4>{this.getDate()}</h4>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default ImageFocused;
