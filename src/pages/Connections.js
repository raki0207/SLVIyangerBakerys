

import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';
import './Connections.css';

const Connections = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Successfully subscribed to our newsletter!');
    setEmail('');
  };

  const socialPlatforms = [
    { id: 1, name: 'LinkedIn', icon: FaLinkedin, description: 'Connect with us professionally', followers: '50K+' },
    { id: 2, name: 'Twitter', icon: FaTwitter, description: 'Follow for latest updates', followers: '35K+' },
    { id: 3, name: 'Facebook', icon: FaFacebook, description: 'Join our community', followers: '45K+' },
    { id: 4, name: 'Instagram', icon: FaInstagram, description: 'See our visual story', followers: '28K+' },
    { id: 5, name: 'YouTube', icon: FaYoutube, description: 'Watch our content', followers: '20K+' },
    { id: 6, name: 'Discord', icon: FaDiscord, description: 'Chat with our team', followers: '15K+' },
  ];

  const partners = [
    { id: 1, name: 'Tech Corp', icon: '🏢' },
    { id: 2, name: 'Innovate Inc', icon: '💡' },
    { id: 3, name: 'Digital Solutions', icon: '💻' },
    { id: 4, name: 'Cloud Systems', icon: '☁️' },
    { id: 5, name: 'Data Analytics', icon: '📊' },
    { id: 6, name: 'Security Pro', icon: '🔒' },
  ];

  return (
    <div className="connections-container">
      <div className="connections-header">
        <h1>Stay Connected</h1>
        <p>Join our community and stay updated with the latest news and insights</p>
      </div>

      <section className="social-section">
        <h2>Follow Us On Social Media</h2>
        <div className="social-grid">
          {socialPlatforms.map(platform => {
            const IconComponent = platform.icon;
            return (
              <div key={platform.id} className="social-card">
                <div className="social-icon"><IconComponent /></div>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <p style={{ fontWeight: 'bold', color: '#667eea', marginBottom: '15px' }}>
                  {platform.followers} Followers
                </p>
                <button className="follow-button">Follow Us</button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Subscribe To Our Newsletter</h2>
        <p>Get the latest updates, insights, and exclusive offers delivered to your inbox</p>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe Now</button>
        </form>
      </section>

      <section className="partners-section">
        <h2>Our Trusted Partners</h2>
        <div className="partners-grid">
          {partners.map(partner => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">{partner.icon}</div>
              <h4>{partner.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Connections;
