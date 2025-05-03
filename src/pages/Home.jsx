import React, { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import StuckSection from '../components/StuckSection';
import ConsultationSection from '../components/ConsultationSection';
import TrainerSection from '../components/TrainerSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrainersSection from '../components/TrainersSection';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroRef.current && heroContentRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        // Apply parallax effect to background
        heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
        
        // Apply counter-movement to content
        heroContentRef.current.style.transform = `translate3d(0, ${-rate * 0.2}px, 0)`;
        
        // Add fade effect based on scroll position
        const opacity = 1 - (scrolled * 0.002);
        heroContentRef.current.style.opacity = Math.max(opacity, 0.3);
      }
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    handleScroll();

    // Section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Add animation classes based on section type
            if (entry.target.classList.contains('stuck-section')) {
              entry.target.classList.add('slide-in-left');
            } else if (entry.target.classList.contains('consultation-section')) {
              entry.target.classList.add('slide-in-right');
            } else if (entry.target.classList.contains('trainer-section')) {
              entry.target.classList.add('fade-in-up');
            } else if (entry.target.classList.contains('testimonials-section')) {
              entry.target.classList.add('fade-in');
            } else if (entry.target.classList.contains('trainers-section')) {
              entry.target.classList.add('scale-in');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('animate');
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  const scrollToContent = () => {
    const firstSection = document.querySelector('.stuck-section');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <div className="home-hero-wrapper">
        <div className="home-hero" ref={heroRef}>
          <div className="hero-overlay"></div>
          <div className="parallax-hero__content" ref={heroContentRef}>
            <h1 className="animate-text">Transform Your Life Through Movement</h1>
            <p className="animate-text">Discover the power of mindful movement and unlock your body's full potential</p>
            <Link to="/get-started" className="hero__cta animate-text">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>

      <section className="home-content">
        <StuckSection />
        <ConsultationSection />
        <TrainerSection />
        <TestimonialsSection />
        <TrainersSection />
      </section>
    </div>
  );
};

export default Home; 