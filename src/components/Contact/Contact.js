import React from "react";
import "./style/Style.css";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <div className="contact__contact">
          <h4>Reason For Inquiry</h4>
          <input />
          <h4>First Name</h4>
          <input />
          <h4>Last Name</h4>
          <input />
          <h4>Contact Email</h4>
          <input />
          <h4>Contact Number</h4>
          <input />
          <h4>Email Contents</h4>
          <textarea />
          <button>Send</button>
        </div>
        <section className="contact__specific">
          <h5>EMAIL</h5>
          <p>example@example.io</p>
          <h5>PHONE</h5>
          <p>(404) 555-1234</p>
        </section>
      </div>
    );
  }
}
export default Contact;
