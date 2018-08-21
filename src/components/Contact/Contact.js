import React from "react";
import "./style/Style.css";
import swal from "sweetalert2";

class Contact extends React.Component {
  state = {
    name: "",
    subject: "",
    body: "",
    email_sent: false
  };
  render() {
    return (
      <div className="contact">
        <div
          className={
            this.state.email_sent
              ? "contact__pre contact__pre__emailsent"
              : "contact__pre"
          }
        >
          <header className="contact__header">
            <h2>CONTACT</h2>
            <h4>
              Wanting to stay connected to me?
              <br />
              Looking for professional work?
            </h4>
          </header>
          <div className="email">
            {/* <div className="flexed">
              <label for="name">Full Name:</label>

              <input
                type="text"
                onChange={e => this.setState({ name: e.target.value })}
                autoComplete="name"
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

            <button
              onClick={() => {
                this.setState({
                  email_sent: true,
                  body: "",
                  subject: "",
                  name: ""
                });
                setTimeout(
                  () =>
                    swal({
                      type: "success",
                      title: "Email Sent",
                      text:
                        "Thank you for contacting me, I will reach out to you as soon as possible!",
                      confirmButton: "GREAT!",
                      footer: "<p>Sam Anderson's Photography</p>"
                    }).then(() => {
                      this.setState({ email_sent: false });
                    }),
                  500
                );
              }}
            >
              SUBMIT
            </button> */}
            <form
              method="POST"
              action="https://formspree.io/odistiinct@gmail.com"
            >
              <div className="flexed">
                <label>Email:</label>
                <input type="email" name="_replyto" required />
              </div>
              <input
                type="hidden"
                name="_subject"
                value="Contact request from personal website"
              />
              <div className="flexed flexed__mes">
                <label>Message:</label>
                <textarea
                  name="message"
                  rows="5"
                  cols="33"
                  className="email__body"
                  required
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
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
