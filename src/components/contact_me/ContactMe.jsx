import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import { LuArrowUpRight, LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone, LuCpu } from "react-icons/lu";

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
          setResult({ success: true, message: "SIGNAL RECEIVED. I'LL RESPOND SHORTLY." });
          setForm({ name: "", email: "", title: "", message: "" });
        },
        (error) => {
          setResult({ success: false, message: "COMMUNICATION FAILURE. PLEASE RETRY." });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-editorial-section" id="contact" {...props}>
      {/* Background Typography */}
      <div className="contact-bg-text">CONNECT</div>

      <div className="contact-editorial-container">
        {/* Left Column: The Narrative */}
        <div className="contact-editorial-left" data-aos="fade-right">
          <div className="contact-status-tag">
            <span className="pulse-dot"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          
          <h2 className="contact-editorial-title">
            Let's build <br /> 
            something <span className="italic-highlight">Legendary.</span>
          </h2>
          
          <p className="contact-editorial-desc">
            Stop scrolling and start building. Whether you have a fully-baked idea or just a spark, 
            I'm here to turn it into a high-performance digital reality.
          </p>

          <div className="contact-editorial-info">
            <div className="info-item-minimal">
              <LuMail className="info-icon" />
              <div className="info-content">
                <span>Direct Mail</span>
                <a href="mailto:bunsai090saporno@gmail.com">bunsai090saporno@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item-minimal">
              <LuMapPin className="info-icon" />
              <div className="info-content">
                <span>Location</span>
                <p>Zamboanga City, PH</p>
              </div>
            </div>
          </div>

          <div className="contact-social-footer">
            <a href="https://github.com/bunsai090" target="_blank" rel="noopener noreferrer" className="social-circle">
              <LuGithub />
            </a>
            <a href="#" className="social-circle">
              <LuLinkedin />
            </a>
          </div>
        </div>

        {/* Right Column: The Console */}
        <div className="contact-editorial-right" data-aos="fade-left">
          <div className="form-console">
            <div className="console-header">
              <LuCpu className="console-icon" />
              <span>TRANSMISSION TERMINAL</span>
            </div>
            
            <form className="console-form" onSubmit={handleSubmit}>
              <div className="console-input-row">
                <div className="console-field">
                  <label>IDENTIFICATION</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={form.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="console-field">
                  <label>COMMUNICATION CHANNEL</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="email@example.com" 
                    value={form.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="console-field full-width">
                <label>OBJECTIVE</label>
                <input 
                  type="text" 
                  name="title" 
                  placeholder="What are we building?" 
                  value={form.title}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="console-field full-width">
                <label>BRIEFING</label>
                <textarea 
                  name="message" 
                  placeholder="Drop your message here..." 
                  value={form.message}
                  onChange={handleChange}
                  rows={4} 
                  required 
                ></textarea>
              </div>

              <button type="submit" className={`console-submit ${loading ? 'active' : ''}`} disabled={loading}>
                <div className="submit-inner">
                  <span>{loading ? 'SENDING SIGNAL...' : 'INITIATE CONTACT'}</span>
                  <LuArrowUpRight className="arrow-icon" />
                </div>
                <div className="submit-progress" style={{ width: loading ? '100%' : '0%' }}></div>
              </button>

              {result && (
                <div className={`console-result ${result.success ? 'success' : 'error'}`}>
                  {result.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="editorial-accent-line"></div>
      <div className="editorial-accent-dot"></div>
    </section>
  );
};

export default ContactMe;