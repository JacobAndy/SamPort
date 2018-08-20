import React from "react";
import "./style/Home.css";

const img1 =
  "https://images.pexels.com/photos/860538/pexels-photo-860538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img2 =
  "https://images.pexels.com/photos/927017/pexels-photo-927017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img3 =
  "https://images.pexels.com/photos/1171545/pexels-photo-1171545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const cycleImages = [img1, img2, img3];

class Home extends React.Component {
  state = {
    currentBackground: 0
  };
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          currentBackground:
            this.state.currentBackground === cycleImages.length - 1
              ? 0
              : this.state.currentBackground + 1
        }),
      4000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let { currentBackground } = this.state;
    return (
      <div
        className="home"
        style={{ backgroundImage: `url(${cycleImages[currentBackground]})` }}
      >
        <section className="adjectives">
          <h2>CLEAN .</h2>
          <h2>PRECISE .</h2>
          <h2>PERFECT .</h2>
        </section>
      </div>
    );
  }
}
export default Home;
