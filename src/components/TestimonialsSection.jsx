import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop',
      text: 'The personalized training approach completely transformed my fitness journey. The focus on proper form and technique helped me achieve results I never thought possible.',
      rating: 5,
      achievement: '15kg Weight Loss',
      duration: '6 Months Journey'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Amateur Athlete',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop',
      text: 'The combination of strength training and mobility work has significantly improved my athletic performance. I feel stronger, more flexible, and more confident than ever.',
      rating: 5,
      achievement: 'Marathon Completed',
      duration: '8 Months Journey'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Corporate Professional',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop',
      text: 'As someone with a busy schedule, the structured approach and attention to detail in every session made my fitness goals achievable. The results speak for themselves!',
      rating: 5,
      achievement: 'Improved Flexibility',
      duration: '4 Months Journey'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-section__background">
        <div className="testimonials-section__overlay"></div>
      </div>
      
      <div className="testimonials-section__content">
        <div className="testimonials-section__header">
          <h2 className="testimonials-section__title">TRANSFORMATIONAL JOURNEYS</h2>
          <p className="testimonials-section__subtitle">
            Real Stories, Real Results
          </p>
        </div>

        <div className="testimonials-section__carousel">
          <div className="testimonials-section__navigation">
            <button 
              className="nav-button prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button 
              className="nav-button next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>

          <div className="testimonials-section__slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-card__media">
                  <div className="testimonial-card__image-container">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="testimonial-card__image"
                    />
                  </div>
                  <div className="testimonial-card__achievements">
                    <div className="achievement">
                      <span className="achievement__label">Achievement</span>
                      <span className="achievement__value">{testimonial.achievement}</span>
                    </div>
                    <div className="achievement">
                      <span className="achievement__label">Duration</span>
                      <span className="achievement__value">{testimonial.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card__content">
                  <div className="testimonial-card__header">
                    <h3 className="testimonial-card__name">{testimonial.name}</h3>
                    <p className="testimonial-card__role">{testimonial.role}</p>
                    <div className="testimonial-card__rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-card__quote">
                    <svg className="quote-icon" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                    <p className="testimonial-card__text">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-section__indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 