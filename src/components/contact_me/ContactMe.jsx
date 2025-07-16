import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-underline" />
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-heading">Let’s&nbsp; work together!</h3>
          <p className="contact-desc">
            I’m always interested in new opportunities and exciting project. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-icon contact-icon-location" />
              <span className="contact-info-text"><em>Sea Breeze, Maasin, Zamboanga City</em></span>
            </li>
            <li>
              <span className="contact-icon contact-icon-phone" />
              <span className="contact-info-text">+63 992 575 0069<br />+63 952 488 6638</span>
            </li>
            <li>
              <span className="contact-icon contact-icon-email" />
              <span className="contact-info-text">bunsai090saporno@gmail.com</span>
            </li>
            <li>
              <span className="contact-icon contact-icon-github" />
              <a href="https://github.com/bunsai090" className="contact-info-link" target="_blank" rel="noopener noreferrer">https://github.com/bunsai090</a>
            </li>
          </ul>
        </div>
        <form className="contact-form">
          <input type="text" className="contact-input" placeholder="Your Name" />
          <input type="email" className="contact-input" placeholder="Your Email" />
          <input type="text" className="contact-input" placeholder="Subject" />
          <textarea className="contact-textarea" placeholder="Your Message" rows={6} />
          <button type="button" className="contact-btn" disabled>Sent Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe; 