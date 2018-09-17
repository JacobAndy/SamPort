import React from "react";
import "./style/Style.css";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <div className="contact__holder__main">
        <div className="contact">
          <div className="contact__subholder">
            <h3>GENERAL ENQUIRES</h3>
            <form
              action="https://formspree.io/odistiinct@gmail.com"
              method="POST"
              className="contact__contact"
            >
              <h4>SUBJECT</h4>
              <input name="_subject" required />
              <h4>FULL NAME</h4>
              <input type="text" name="name" required />
              <h4>CONTACT EMAIL</h4>
              <input type="email" name="_replyto" required />
              <h4>CONTACT NUMBER</h4>
              <input type="tel" name="Contact_Number" />
              <h4>YOUR MESSAGE</h4>
              <textarea rows="6" cols="32" name="Email_Contents" required />
              <button type="submit" value="Send">
                Send
              </button>
            </form>
          </div>
          <div className="contact__details">
            <h3>CONTACT</h3>
            <section>
              <i className="fa fa-envelope" />
              <h4>example@email.io</h4>
            </section>
            <section>
              <i className="fa fa-phone" />
              <h4>(555) 404-5555</h4>
            </section>
            <section>
              <i className="fa fa-instagram" />
              <h4>instagram101</h4>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
