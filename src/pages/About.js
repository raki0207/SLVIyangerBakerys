import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import {
  FaBullseye,
  FaEye,
  FaRocket,
  FaGem,
  FaShieldAlt,
  FaComments,
  FaMoneyBillWave,
  FaTrophy,
  FaHandshake,
  FaBolt,
  FaFistRaised,
  FaGlobe,
  FaHeart,
  FaMagic,
  FaUserTie,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCookieBite,
  FaBirthdayCake,
  FaBreadSlice
} from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [teamImage1Error, setTeamImage1Error] = useState(false);
  const [teamImage2Error, setTeamImage2Error] = useState(false);

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Raki Bakery</h1>
        <p>We're passionate about creating the finest baked goods with love, tradition, and the freshest ingredients</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Founded in 2020, Raki Bakery started as a small family-owned business with a passion for creating delicious, fresh-baked goods. What began as a humble kitchen has grown into a beloved local bakery serving our community with love and dedication.</p>
          <p>Our master bakers bring generations of traditional baking knowledge combined with modern techniques to create exceptional pastries, breads, cakes, and treats.</p>
          <p>We believe in using only the finest ingredients, baking fresh daily, and creating memorable experiences that bring joy to every bite.</p>
        </div>
        <div className="about-image">
          {!imageError ? (
            <img 
              src="/assets/background/bakerimgnew.png" 
              alt="Our bakery" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '5rem', color: 'white' }}>
              <FaBreadSlice />
            </div>
          )}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision-section">
        <div className="mission-card">
          <div className="mv-icon"><FaBullseye /></div>
          <h3>Our Mission</h3>
          <p>To bring joy and warmth to every home through our freshly baked goods, made with premium ingredients, traditional recipes, and a whole lot of love. We're committed to creating memorable moments, one delicious treat at a time.</p>
        </div>
        <div className="vision-card">
          <div className="mv-icon"><FaEye /></div>
          <h3>Our Vision</h3>
          <p>To become the most beloved bakery in our community, known for exceptional quality, authentic flavors, and the warm, welcoming experience that makes every customer feel like family.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-section">
        <h2>Why Choose Raki Bakery?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon"><FaRocket /></div>
            <h4>Fresh Daily</h4>
            <p>All our baked goods are made fresh every morning, ensuring the best taste and quality</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><FaGem /></div>
            <h4>Premium Ingredients</h4>
            <p>We use only the finest, locally sourced ingredients in all our recipes</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><FaShieldAlt /></div>
            <h4>Traditional Recipes</h4>
            <p>Time-honored baking techniques passed down through generations</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><FaComments /></div>
            <h4>Custom Orders</h4>
            <p>We create personalized cakes and treats for your special occasions</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><FaMoneyBillWave /></div>
            <h4>Fair Prices</h4>
            <p>Quality baked goods at affordable prices for everyone to enjoy</p>
          </div>
          <div className="why-card">
            <div className="why-icon"><FaTrophy /></div>
            <h4>Award Winning</h4>
            <p>Recognized for excellence in baking and customer satisfaction</p>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><FaHeart /></div>
            <h3>Passion</h3>
            <p>We bake with genuine passion and love, putting our heart into every creation that comes out of our ovens.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaHandshake /></div>
            <h3>Authenticity</h3>
            <p>We stay true to traditional recipes and methods, preserving the authentic flavors that make our bakery special.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaBolt /></div>
            <h3>Freshness</h3>
            <p>We bake fresh daily, ensuring every customer receives the highest quality products at peak freshness.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaFistRaised /></div>
            <h3>Community</h3>
            <p>We're proud to be part of our local community, supporting neighbors and creating lasting relationships.</p>
          </div>
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="milestones-section">
        <h2>Our Journey</h2>
        <p className="journey-subtitle">5 Years of Baking Excellence, Growth, and Sweet Memories</p>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-year-wrapper">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2020</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-icon"><FaRocket /></div>
              <h4>Bakery Founded</h4>
              <p>Started with a small kitchen and a big dream to bring fresh, delicious baked goods to our community</p>
              <span className="timeline-badge">Foundation</span>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-year-wrapper">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2021</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-icon"><FaBullseye /></div>
              <h4>First 1,000 Happy Customers</h4>
              <p>Reached our first major milestone, serving our community with love and delicious treats</p>
              <span className="timeline-badge">Growth</span>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-year-wrapper">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2022</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-icon"><FaGlobe /></div>
              <h4>Expanded Menu</h4>
              <p>Added new product lines including artisanal breads, custom cakes, and specialty pastries</p>
              <span className="timeline-badge">Expansion</span>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-year-wrapper">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2023</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-icon"><FaTrophy /></div>
              <h4>Local Bakery Award</h4>
              <p>Received "Best Local Bakery" award for outstanding quality and customer service</p>
              <span className="timeline-badge">Excellence</span>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-year-wrapper">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2024</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-icon"><FaHeart /></div>
              <h4>10,000+ Happy Customers</h4>
              <p>Celebrated serving thousands of satisfied customers and creating countless sweet memories</p>
              <span className="timeline-badge">Milestone</span>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-year-wrapper">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2025</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-icon"><FaMagic /></div>
              <h4>Continuing to Bake</h4>
              <p>Still baking fresh daily, introducing new flavors, and spreading joy one treat at a time</p>
              <span className="timeline-badge">Future</span>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-avatar">
              {!teamImage1Error ? (
                <img 
                  src="/assets/background/bakerimg.png" 
                  alt="Master Baker" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  onError={() => setTeamImage1Error(true)}
                />
              ) : (
                <FaUserTie style={{ fontSize: '3rem', color: 'white' }} />
              )}
            </div>
            <h3>Rakesh Kumar</h3>
            <p>Master Baker & Founder</p>
          </div>
          <div className="team-member">
            <div className="team-avatar">
              {!teamImage2Error ? (
                <img 
                  src="/assets/background/bakerimgnew.png" 
                  alt="Pastry Chef" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  onError={() => setTeamImage2Error(true)}
                />
              ) : (
                <FaBirthdayCake style={{ fontSize: '3rem', color: 'white' }} />
              )}
            </div>
            <h3>Priya Sharma</h3>
            <p>Head Pastry Chef</p>
          </div>
          <div className="team-member">
            <div className="team-avatar"><FaCookieBite style={{ fontSize: '3rem', color: 'white' }} /></div>
            <h3>Arjun Patel</h3>
            <p>Bread Specialist</p>
          </div>
          <div className="team-member">
            <div className="team-avatar"><FaBreadSlice style={{ fontSize: '3rem', color: 'white' }} /></div>
            <h3>Meera Singh</h3>
            <p>Customer Relations</p>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="get-in-touch-section">
        <div className="touch-content">
          <h2>Ready to Taste the Difference?</h2>
          <p>Join thousands of satisfied customers and experience the joy of fresh-baked goodness. Visit us today or place an order for your next celebration!</p>
          <div className="touch-buttons">
            <button className="touch-btn primary" onClick={() => navigate('/contact')}>
              Contact Us
            </button>
            <button className="touch-btn secondary" onClick={() => navigate('/products')}>
              View Our Products
            </button>
          </div>
          <div className="touch-info">
            <div className="touch-info-item">
              <span className="touch-info-icon"><FaEnvelope /></span>
              <span>info@rakibakery.com</span>
            </div>
            <div className="touch-info-item">
              <span className="touch-info-icon"><FaPhone /></span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="touch-info-item">
              <span className="touch-info-icon"><FaMapMarkerAlt /></span>
              <span>123 Bakery Lane, Sweet City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
