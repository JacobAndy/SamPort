import React from "react";
import "./style/Style.css";

class Contact extends React.Component {
  state = {
    name: "",
    subject: "",
    body: ""
  };
  render() {
    return (
      <div className="contact">
        <div className="contact__pre">
          <header className="contact__header">
            <h2>CONTACT</h2>
            <h4>
              Wanting to stay connected to me?
              <br />
              Looking for professional work?
            </h4>
          </header>
          <form className="email">
            <div className="flexed">
              <label for="name">Full Name:</label>

              <input
                // required={true}
                type="text"
                onChange={e => this.setState({ name: e.target.value })}
                autoComplete="name"
                //  placeholder="name"
                id="name"
              />
            </div>
            <div className="flexed">
              <label for="email">Contents:</label>

              <textarea
                onChange={e => this.setState({ body: e.target.value })}
                className="email__body"
                rows="5"
                cols="34"
              />
            </div>
            {/* <button>SEND</button> */}

            <button
              onClick={() => this.setState({ body: "", subject: "", name: "" })}
            >
              SUBMIT
            </button>
          </form>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/sam.andy/">
              <i
                style={{ fontSize: "40px" }}
                className="fa fa-instagram media"
              />
            </a>
            <a href="mailto:samandy002@gmail.com">
              <i
                style={{ fontSize: "40px" }}
                className="fa fa-envelope media"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
