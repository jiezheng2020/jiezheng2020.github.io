import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          alert("Email has been sent!");
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div id="contact" className="contact-container">
      <div style={{ fontSize: "35px" }}>Contact Me</div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="email-submit" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
