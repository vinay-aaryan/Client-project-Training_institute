import React, { useEffect } from 'react';
import ParallaxHero from '../components/ParallaxHero';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    // Add animate class to sections
    const sections = document.querySelectorAll('.about-section, .about-values');
    sections.forEach(section => {
      section.classList.add('animate');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sections.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-us">
      <ParallaxHero 
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
        className="about-hero"
      >
        <div className="parallax-hero__content">
          <h1>Welcome to Our Journey</h1>
          <p className="hero-subtitle">Discover the Power of Mindful Movement</p>
          <div className="hero-description">
            <p>
              We are a community dedicated to transforming lives through mindful movement and holistic wellness.
              Our mission is to help you reconnect with your body, find joy in movement, and achieve your wellness goals.
            </p>
          </div>
        </div>
      </ParallaxHero>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-container">
          {/* Mission Section */}
          <div className="about-section">
            <div className="about-section-content">
              <div className="about-text">
                <h2>Our Mission</h2>
                <p>
                  We are dedicated to helping people reconnect with their bodies and discover
                  the transformative power of mindful movement. Our approach combines modern
                  fitness science with holistic wellness practices.
                </p>
              </div>
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Our Mission - Mindful Movement" 
                />
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="about-section">
            <div className="about-section-content reverse">
              <div className="about-text">
                <h2>Our Vision</h2>
                <p>
                  We envision a world where people are fully connected to their bodies,
                  moving with purpose and joy, and living healthier, more fulfilled lives
                  through conscious movement practices.
                </p>
              </div>
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Our Vision - Joyful Movement" 
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Movement</h3>
                <p>We believe in the power of natural, functional movement.</p>
              </div>
              <div className="value-card">
                <h3>Mindfulness</h3>
                <p>Every movement is an opportunity for presence and awareness.</p>
              </div>
              <div className="value-card">
                <h3>Growth</h3>
                <p>Continuous learning and development in mind and body.</p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>Building connections through shared movement experiences.</p>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="about-section">
            <div className="about-section-content">
              <div className="about-text">
                <h2>Your Journey With Us</h2>
                <p>
                  Whether you're just starting your movement journey or looking to
                  deepen your practice, we're here to support you every step of the way.
                  Our programs are designed to meet you where you are and help you
                  progress at your own pace.
                </p>
              </div>
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Your Journey - Personal Growth" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
