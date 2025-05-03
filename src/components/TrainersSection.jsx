import React, { useState, useEffect, useRef } from 'react';
import './TrainersSection.css';

const trainers = [
  {
    id: 1,
    name: "John Smith",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
    bio: "Certified strength and conditioning specialist with 10+ years of experience. Specializes in functional training and sports performance.",
    specialties: ["Strength Training", "Sports Performance", "Functional Training"],
    certifications: ["CSCS", "NASM", "CrossFit Level 3"],
    experience: "10+ years",
    social: {
      instagram: "johnsmith_fitness",
      linkedin: "johnsmith",
      twitter: "johnsmithfit"
    },
    featured: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Yoga & Mindfulness",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&auto=format&fit=crop&q=60",
    bio: "Experienced yoga instructor with a focus on mindfulness and holistic wellness. Trained in various yoga styles and meditation techniques.",
    specialties: ["Vinyasa Yoga", "Meditation", "Holistic Wellness"],
    certifications: ["RYT-500", "Mindfulness Teacher", "Reiki Master"],
    experience: "8+ years"
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "HIIT & Cardio",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60",
    bio: "HIIT specialist with a passion for high-intensity workouts. Expert in creating challenging and effective cardio programs.",
    specialties: ["HIIT", "Cardio", "Weight Loss"],
    certifications: ["ACE", "HIIT Specialist", "Nutrition Coach"],
    experience: "6+ years"
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Nutrition & Wellness",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
    bio: "Registered dietitian and wellness coach. Specializes in creating personalized nutrition plans and lifestyle coaching.",
    specialties: ["Nutrition", "Wellness Coaching", "Weight Management"],
    certifications: ["RD", "Wellness Coach", "Sports Nutrition"],
    experience: "7+ years"
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Rehabilitation & Recovery",
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=800&auto=format&fit=crop&q=60",
    bio: "Physical therapist and recovery specialist. Expert in injury prevention and rehabilitation programs.",
    specialties: ["Rehabilitation", "Injury Prevention", "Recovery"],
    certifications: ["DPT", "Sports Medicine", "Recovery Specialist"],
    experience: "12+ years"
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Pilates & Core",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
    bio: "Pilates instructor with a focus on core strength and posture. Trained in classical and contemporary Pilates methods.",
    specialties: ["Pilates", "Core Strength", "Posture"],
    certifications: ["Pilates Instructor", "Core Specialist", "Posture Expert"],
    experience: "9+ years"
  }
];

const visibleCount = 3;

const TrainersSection = () => {
  const [centerIndex, setCenterIndex] = useState(1);
  const [modalTrainer, setModalTrainer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const autoScrollRef = useRef();

  // Get unique specialties for filter
  const specialties = ['all', ...new Set(trainers.flatMap(trainer => trainer.specialties))];

  // Filter trainers based on search and specialty
  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || trainer.specialties.includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  // Auto-scroll logic
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % trainers.length);
    }, 4000);
    return () => clearInterval(autoScrollRef.current);
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => clearInterval(autoScrollRef.current);
  const handleMouseLeave = () => {
    autoScrollRef.current = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % trainers.length);
    }, 4000);
  };

  // Navigation
  const handlePrev = () => setCenterIndex((prev) => (prev - 1 + trainers.length) % trainers.length);
  const handleNext = () => setCenterIndex((prev) => (prev + 1) % trainers.length);

  // Card classes for 3D/fade effect
  const getCardClass = (idx) => {
    if (idx === centerIndex) return 'modern-trainer-card focused';
    if ((idx + 1) % trainers.length === centerIndex) return 'modern-trainer-card left';
    if ((idx - 1 + trainers.length) % trainers.length === centerIndex) return 'modern-trainer-card right';
    return 'modern-trainer-card';
  };

  // Cards to show (center + 1 left/right)
  const getVisibleTrainers = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      let idx = (centerIndex + i + trainers.length) % trainers.length;
      result.push(trainers[idx]);
    }
    return result;
  };

  return (
    <section className="modern-trainers-section">
      <div className="trainers-background"></div>
      
      <div className="trainers-header">
        <h2 className="modern-trainers-title">Meet Our Trainers</h2>
        <p className="modern-trainers-subtitle">Meet our team of certified professionals dedicated to your fitness journey</p>
        
        <div className="trainers-filters">
          <input
            type="text"
            placeholder="Search trainers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="trainer-search"
          />
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="specialty-filter"
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>
                {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="modern-trainers-carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className="carousel-nav prev" onClick={handlePrev}>&lt;</button>
        <div className="modern-trainers-row">
          {getVisibleTrainers().map((trainer, idx) => {
            let realIdx = (centerIndex + idx - 1 + trainers.length) % trainers.length;
            return (
              <div
                key={trainer.id}
                className={`modern-trainer-card ${getCardClass(realIdx)} ${trainer.featured ? 'featured' : ''}`}
                onClick={() => setModalTrainer(trainer)}
              >
                {trainer.featured && <div className="featured-badge">Featured</div>}
                <div className="trainer-image-wrapper">
                  <img src={trainer.image} alt={trainer.name} className="modern-trainer-img" />
                  <div className="trainer-overlay">
                    <div className="social-links">
                      {trainer.social?.instagram && (
                        <a href={`https://instagram.com/${trainer.social.instagram}`} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                      {trainer.social?.linkedin && (
                        <a href={`https://linkedin.com/in/${trainer.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      )}
                      {trainer.social?.twitter && (
                        <a href={`https://twitter.com/${trainer.social.twitter}`} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="modern-trainer-info">
                  <h3>{trainer.name}</h3>
                  <p>{trainer.role}</p>
                  <div className="trainer-specialties">
                    {trainer.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="carousel-nav next" onClick={handleNext}>&gt;</button>
      </div>

      {modalTrainer && (
        <div className="trainer-modal-overlay" onClick={() => setModalTrainer(null)}>
          <div className="trainer-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setModalTrainer(null)}>&times;</button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={modalTrainer.image} alt={modalTrainer.name} />
                <div className="social-links">
                  {modalTrainer.social?.instagram && (
                    <a href={`https://instagram.com/${modalTrainer.social.instagram}`} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {modalTrainer.social?.linkedin && (
                    <a href={`https://linkedin.com/in/${modalTrainer.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {modalTrainer.social?.twitter && (
                    <a href={`https://twitter.com/${modalTrainer.social.twitter}`} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="modal-info">
                <h2>{modalTrainer.name}</h2>
                <div className="trainer-role">{modalTrainer.role}</div>
                <div className="bio">{modalTrainer.bio}</div>
                <div className="specialties">
                  <h3>Specialties</h3>
                  <div className="specialty-tags">
                    {modalTrainer.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
                <div className="certifications">
                  <h3>Certifications</h3>
                  <div className="certification-tags">
                    {modalTrainer.certifications.map((cert, index) => (
                      <span key={index} className="certification-tag">{cert}</span>
                    ))}
                  </div>
                </div>
                <div className="experience">
                  <h3>Experience</h3>
                  <p>{modalTrainer.experience}</p>
                </div>
                <button className="book-session-button">Book a Session</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainersSection; 

 