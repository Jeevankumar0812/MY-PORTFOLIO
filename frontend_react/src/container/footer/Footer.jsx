import React, { useState } from 'react';
import './Footer.scss';
import images from '../../constants/images';
import { IconMail, IconPhone } from '../../components/Icons';

// ✏️ EDIT ME — phone is a placeholder, replace with your real number
const EMAIL = 'mjeevankumar08@gmail.com';
const PHONE = '+91 9398654166';

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // ✏️ EDIT ME — wire this up to Formspree / EmailJS / your own backend.
    // For now it just shows a "thanks!" state so you can see the UI.
    setSubmitted(true);
  };

  return (
    <div id="contact" className="app__footer app__flex">
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <IconMail width={28} height={28} />
          <a href={`mailto:${EMAIL}`} className="p-text">{EMAIL}</a>
        </div>
        <div className="app__footer-card">
          <IconPhone width={28} height={28} />
          <a href={`tel:${PHONE.replace(/\s|\(|\)|-/g, '')}`} className="p-text">{PHONE}</a>
        </div>
      </div>

      {!submitted ? (
        <form className="app__footer-form app__flex" onSubmit={onSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              required
            />
          </div>
          <button type="submit" className="p-text">Send Message</button>
        </form>
      ) : (
        <div className="app__footer-thanks">
          <h3 className="head-text"><span>Thank you!</span></h3>
          <p className="p-text">I&rsquo;ll get back to you within 48 hours.</p>
        </div>
      )}

      <div className="copyright">
        <p className="p-text">@2026 Jeevan Kumar Mitta</p>
        <p className="p-text">All rights reserved</p>
      </div>

      <div className="app__footer-mark" aria-hidden="true">
        <img src={images.logo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
