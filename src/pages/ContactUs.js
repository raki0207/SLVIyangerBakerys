import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="map-section">
          <h2>Find Us On The Map</h2>
          <p>Visit our office for a face-to-face meeting</p>
          <div className="map-placeholder">🗺️</div>
        </div>
      </div>



      {/* Get in Touch Section */}
      <div className="get-in-touch-section">
        <div className="touch-content">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied customers and experience the difference. Our team is ready to help you achieve your goals.</p>
          <div className="touch-buttons">
            <button className="touch-btn secondary" onClick={() => navigate('/products')}>
              View Products
            </button>
          </div>
          <div className="touch-info">
            <div className="touch-info-item">
              <span className="touch-info-icon"><FaEnvelope /></span>
              <span>info@company.com</span>
            </div>
            <div className="touch-info-item">
              <span className="touch-info-icon"><FaPhone /></span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="touch-info-item">
              <span className="touch-info-icon"><FaMapMarkerAlt /></span>
              <span>123 Business Street, Tech City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
