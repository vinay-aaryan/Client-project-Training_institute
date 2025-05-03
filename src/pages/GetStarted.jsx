import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="get-started">
      <section className="get-started__hero">
        <div className="get-started__hero-content">
          <h1>Start Your Fitness Journey</h1>
          <p className="get-started__subtitle">
            Take the first step towards a healthier, stronger you
          </p>
        </div>
      </section>

      <section className="get-started__main">
        <div className="get-started__container">
          <div className="get-started__form-section">
            <div className="get-started__form">
              <h2>Book Your Free Consultation</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="goals">Your Fitness Goals</label>
                  <textarea id="goals" name="goals" rows="4" required></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Book Now
                </button>
              </form>
            </div>
          </div>

          <div className="get-started__info-section">
            <div className="get-started__info">
              <h2>Why Choose Us?</h2>
              <div className="info-grid">
                <div className="info-card">
                  <h3>Personalized Approach</h3>
                  <p>Customized training programs tailored to your specific goals and needs.</p>
                </div>
                
                <div className="info-card">
                  <h3>Expert Trainers</h3>
                  <p>Certified professionals with years of experience in fitness and wellness.</p>
                </div>
                
                <div className="info-card">
                  <h3>Flexible Scheduling</h3>
                  <p>Work with your schedule to find the perfect time for your sessions.</p>
                </div>
                
                <div className="info-card">
                  <h3>Supportive Environment</h3>
                  <p>A welcoming community focused on your success and well-being.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted; 