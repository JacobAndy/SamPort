import React from "react";
import { Link } from "react-router-dom";

function MappedImage({ image }) {
  return (
    <Link to={`/display/${image.id}`}>
      <div
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
            <i className="fa fa-comment fa-2x" />
            <h4>{image.comments.count}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default MappedImage;
