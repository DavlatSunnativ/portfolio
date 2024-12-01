import React, { useState } from "react";
import emailjs from "emailjs-com";
import telegram from "../img/telegram.png";
import linkedin from "../img/linkedin.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "davlat-id", // Replace with your EmailJS service ID
        "davlat-template", // Replace with your EmailJS template ID
        formData,
        "hTTDcU2925G-UIRr3" // Replace with your EmailJS public key
      )
      .then(
        () => setStatus("Message sent successfully!"),
        () => setStatus("Failed to send the message. Please try again.")
      );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <h1 className="section-header" id="contact">Contact Me</h1>
      <div className="row">
        <div className="col-lg-6 mt-1">
          <form onSubmit={sendEmail}>
            <div className="mb-3">
              <input
                type="text"
                className=""
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className=""
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className=""
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn contact-btn contact-btn-form">
              Send email
            </button>
            {status && <p className="mt-3">{status}</p>}
          </form>
        </div>

        <div className="col-lg-3">
          <div className="contact-card" id="1-skill">
            <img
              className="card-img-top contact-card-img"
              src={telegram}
              alt={telegram}
            />
            <a href="https://t.me/userd0666">
              <div className="btn contact-btn contact-btn-card  ">Telegram</div>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="contact-card" id="1-skill">
            <img
              className="card-img-top contact-card-img"
              src={linkedin}
              alt={linkedin}
            />
            <a href="https://www.linkedin.com/in/davlat-sunnatov-14a3912b8/">
              <div className="btn contact-btn contact-btn-card">Linkedin</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
