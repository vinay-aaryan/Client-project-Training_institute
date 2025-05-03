import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Add animation class when component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    elements.forEach(element => observer.observe(element));

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.dataset.speed) || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="hero">
        <div className="parallax-bg" data-speed="0.5"></div>
        <div className="hero-content">
          <h1 className="parallax" data-speed="0.3">Let's Connect</h1>
          <p className="hero-subtitle parallax" data-speed="0.2">We're here to help and answer any questions you might have</p>
          <div className="hero-description parallax" data-speed="0.1">
            <p>Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
          </div>
        </div>
      </div>
      
      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info animate-on-scroll">
            <h2>Contact Information</h2>
            <div className="info-cards">
              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <div className="info-text">
                  <h3>Email</h3>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="info-card">
                <FaPhone className="info-icon" />
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div className="info-card">
                <FaWhatsapp className="info-icon" />
                <div className="info-text">
                  <h3>WhatsApp</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <div className="info-text">
                  <h3>Address</h3>
                  <p>Indore Bharakua, Bholaram</p>
                </div>
              </div>
            </div>
            <div className="contact-buttons">
              <a href="mailto:info@example.com" className="contact-button">
                <FaEnvelope /> Email Us
              </a>
              <a href="tel:(123) 456-7890" className="contact-button">
                <FaPhone /> Call Us
              </a>
            </div>
          </div>
          
          <div className="contact-form animate-on-scroll">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Your phone number"
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
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="map-container animate-on-scroll">
          <h2>Our Location</h2>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1234567890123!2d75.12345678901234!3d22.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA3NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 