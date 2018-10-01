import React from "react";
import "./style/About.css";
import BottomAbout from "./BottomAbout";

function About() {
  return (
    <div>
      <div className="about">
        <img
          src="https://scontent-dfw5-1.cdninstagram.com/vp/c5603126af9bf78539f78f1546ada90e/5C2DC162/t51.2885-19/s320x320/26185226_394132841042457_5870802354659393536_n.jpg"
          className="about__image"
        />
        <section>
          <h2>What Makes Gannon So Different?</h2>
          <h4>
            For an entire year, Gannon lived in a house with 10 Christian
            musicians and photographed live events exclusively for several
            well-known Christian song writers and recording artists. His efforts
            have helped them launch their musical careers and ministries, blow
            up their fanbases, and get more exposure so they can play on more
            stages, more often.
          </h4>
          <h4>
            Gannon's mission to help you band get noticed and stand out from the
            crowd by producing high-quality images that clearly communicate your
            authentic message, while graphically telling your unique story.
          </h4>
        </section>
      </div>
      <BottomAbout />
    </div>
  );
}
export default About;
