import React from "react";
import "./style/Style.css";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <div className="contact__why">
          {/* <h2>FIND ME</h2> */}
          <section>
            <h4>
              <span style={{ borderBottom: "2px solid #1c54b2" }}>
                Social Media
              </span>{" "}
              ?
            </h4>
            <p>
              Keep up with me on social media accounts, I post everything from
              professional pictures to my day to day!
            </p>
          </section>
          <section>
            <h4>
              <span style={{ borderBottom: "2px solid #1c54b2" }}>
                Business Needs
              </span>{" "}
              ?
            </h4>
            <p>
              Need professional photography? or looking for future business
              needs?
              <br />
              Feel free to contact me, or fill out the form!
            </p>
          </section>
          <section>
            <h4>
              <span style={{ borderBottom: "2px solid #1c54b2" }}>
                Get a quote
              </span>
              ?
            </h4>
            <p>
              Prices vary depending on time, place, and your needs. <br />
              Get in contact to discuss further!
            </p>
          </section>
        </div>
        <form
          action="https://formspree.io/odistiinct@gmail.com"
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
          <div>
            <a href="">
              <i className="fa fa-facebook-f" />
            </a>
            <a href="">
              <i className="fa fa-instagram" />
            </a>
            <a href="">
              <i className="fa fa-twitter" />
            </a>
            <a href="">
              <i className="fa fa-pinterest-p" />
            </a>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
