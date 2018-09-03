import React from "react";
import "./style/ImageFocused.css";

function ImageFocused({ image }) {
  console.log(image);
  //check for image.carousel_media
  return (
    <div className="image-focused">
      <section>
        <img src="" />
      </section>
      <section>comments</section>
    </div>
  );
}
export default ImageFocused;
