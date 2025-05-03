import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParallaxHero from '../components/ParallaxHero';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'training', name: 'Training' },
    { id: 'yoga', name: 'Yoga' },
    { id: 'meditation', name: 'Meditation' },
    { id: 'stretching', name: 'Stretching' }
  ];

  const services = [
    {
      id: 1,
      title: 'Strength Training',
      description: 'Build muscle, increase strength, and improve overall fitness with our personalized strength training programs.',
      category: 'training',
      image: '/images/strength-training.jpg',
      link: '/resources/strength-training'
    },
    {
      id: 2,
      title: 'Sports Training',
      description: 'Enhance your athletic performance with specialized sports training programs tailored to your specific sport.',
      category: 'training',
      image: '/images/sports-training.jpg',
      link: '/resources/sports-training'
    },
    {
      id: 3,
      title: 'Animal Flow',
      description: 'Connect with your primal movement patterns through this ground-based movement practice.',
      category: 'training',
      image: '/images/animal-flow.jpg',
      link: '/resources/animal-flow'
    },
    {
      id: 4,
      title: 'Mat Pilates',
      description: 'Improve core strength, flexibility, and body awareness with our mat Pilates classes.',
      category: 'training',
      image: '/images/mat-pilates.jpg',
      link: '/resources/mat-pilates'
    },
    {
      id: 5,
      title: 'Yoga',
      description: 'Find balance and inner peace through our traditional yoga practices.',
      category: 'yoga',
      image: '/images/yoga.jpg',
      link: '/resources/yoga'
    },
    {
      id: 6,
      title: 'Aerial Yoga',
      description: 'Experience the freedom of movement with our aerial yoga classes using silk hammocks.',
      category: 'yoga',
      image: '/images/aerial-yoga.jpg',
      link: '/resources/aerial-yoga'
    },
    {
      id: 7,
      title: 'Power Yoga',
      description: 'Build strength and flexibility with our dynamic power yoga sessions.',
      category: 'yoga',
      image: '/images/power-yoga.jpg',
      link: '/resources/power-yoga'
    },
    {
      id: 8,
      title: 'Bikram Yoga',
      description: 'Challenge yourself with our hot yoga classes in a controlled environment.',
      category: 'yoga',
      image: '/images/bikram-yoga.jpg',
      link: '/resources/bikram-yoga'
    },
    {
      id: 9,
      title: 'Vinyasa Flow',
      description: 'Flow through poses with breath in our dynamic vinyasa classes.',
      category: 'yoga',
      image: '/images/vinyasa.jpg',
      link: '/resources/vinyasa'
    },
    {
      id: 10,
      title: 'Astanga Flow',
      description: 'Master the traditional Astanga yoga sequence with our expert instructors.',
      category: 'yoga',
      image: '/images/astanga.jpg',
      link: '/resources/astanga'
    },
    {
      id: 11,
      title: 'Mantra Meditation',
      description: 'Find inner peace through the power of sound and meditation.',
      category: 'meditation',
      image: '/images/mantra.jpg',
      link: '/resources/mantra'
    },
    {
      id: 12,
      title: 'Sound Healing',
      description: 'Experience deep relaxation and healing through the power of sound vibrations.',
      category: 'meditation',
      image: '/images/sound-healing.jpg',
      link: '/resources/sound-healing'
    },
    {
      id: 13,
      title: 'Passive Stretches',
      description: 'Improve flexibility and reduce muscle tension with our guided stretching sessions.',
      category: 'stretching',
      image: '/images/stretching.jpg',
      link: '/resources/stretching'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="services">
      <ParallaxHero backgroundImage="/public/photo33.jpg" className="services-hero">
        <div className="parallax-hero__content">
          <h1>Our Services</h1>
          <p>Discover a wide range of movement and wellness practices</p>
        </div>
      </ParallaxHero>

      <section className="services-content">
        <div className="services-container">
          <div className="services-categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card__content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="service-card__link">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 