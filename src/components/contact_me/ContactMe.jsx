import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";

const SERVICE_ID = "service_7sktw8u";
const TEMPLATE_ID = "template_sz37cyc";
const PUBLIC_KEY = "DaK2ETppMhxPOVNis";

const ContactMe = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        () => {
          setResult({ success: true, message: "Message sent successfully!" });
          setForm({ name: "", email: "", title: "", message: "" });
        },
        (error) => {
          setResult({ success: false, message: "Failed to send message. Please try again later." });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-section" id="contact" {...props}>
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="contact-input"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="contact-input"
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="contact-input"
            placeholder="Subject"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <textarea
            className="contact-textarea"
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
          />
          <button
            type="submit"
            className="contact-btn"
            disabled={loading}
            style={{ cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {result && (
            <div
              style={{
                marginTop: "1rem",
                color: result.success ? "#4BB543" : "#FF3333",
                fontWeight: 500,
                textAlign: "center",
                background: "#23222a",
                borderRadius: "8px",
                padding: "0.75rem 1rem",
              }}
            >
              {result.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe; 