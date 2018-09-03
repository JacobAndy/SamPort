import React from "react";
import "./style/Style.css";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <form
          action="https://formspree.io/example@gmail.com"
          method="POST"
          className="contact__contact"
        >
          <h4>SUBJECT</h4>
          <input
            placeholder="Business Inquiries, Hello etc."
            name="_subject"
            required
          />
          <h4>FULL NAME</h4>
          <input placeholder="John Smith" type="text" name="name" required />
          <h4>CONTACT EMAIL</h4>
          <input
            placeholder="john@smith.com"
            type="email"
            name="_replyto"
            required
          />
          <h4>CONTACT NUMBER</h4>
          <input
            placeholder="(111) 555-1234"
            type="tel"
            name="Contact_Number"
          />
          <h4>YOUR MESSAGE</h4>
          <textarea
            placeholder="Body message..."
            rows="6"
            cols="32"
            name="Email_Contents"
            required
          />
          <button type="submit" value="Send">
            Send
          </button>
        </form>
        <section className="contact__specific">
          <div className="contact__specific__ea">
            <h5>EMAIL</h5>
            <p>example@example.io</p>
          </div>
          <div className="contact__specific__ea">
            <h5>PHONE</h5>
            <p>(404) 555-1234</p>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
