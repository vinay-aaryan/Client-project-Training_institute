import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ConsultationSection.css';

const ConsultationSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: ''
  });

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, date: selectedDate, time: selectedTime });
  };

  return (
    <section className="consultation-section">
      <div className="time-awareness">
        <h1 className="time-awareness__title">NOW ITS TIME</h1>
        <p className="time-awareness__subtitle">Time of Self Awareness</p>
        
        <div className="awareness-icons">
          <div className="awareness-icon">
            <div className="icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M13 4v2.5c0 .83-.67 1.5-1.5 1.5S10 7.33 10 6.5V4c0-1.1.9-2 2-2s2 .9 2 2z" />
                <path d="M9.17 9l-2.83 2.83L9.17 15H4v-6h5.17z" />
              </svg>
            </div>
            <p>PERSONAL DEVELOPMENT</p>
          </div>
          
          <div className="awareness-icon">
            <div className="icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            <p>BODY AWARENESS</p>
          </div>
          
          <div className="awareness-icon">
            <div className="icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            <p>HOLISTIC STRENGTH</p>
          </div>
          
          <div className="awareness-icon">
            <div className="icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            <p>BODY MIND CONNECTION</p>
          </div>
          
          <div className="awareness-icon">
            <div className="icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            <p>SELF MASTERY</p>
          </div>
        </div>
      </div>

      <div className="video-section" />

      <div className="consultation-container">
        <div className="consultation-header">
          <h2>Book Your Free Consultation</h2>
          <p>Take the first step towards your transformation journey</p>
        </div>

        <div className="consultation-content">
          <div className="consultation-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="goals">Your Fitness Goals</label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Book Consultation
              </button>
            </form>
          </div>

          <div className="calendar-section">
            <h3>Select Date & Time</h3>
            <div className="calendar-container">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={new Date()}
                className="custom-calendar"
              />
            </div>

            <div className="time-slots">
              <h4>Available Time Slots</h4>
              <div className="time-grid">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection; 