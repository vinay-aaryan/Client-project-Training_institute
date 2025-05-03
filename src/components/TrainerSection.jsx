import React from 'react';
import './TrainerSection.css';

const TrainerSection = () => {
  return (
    <section className="owner-section">
      <div className="owner-section__header">
        <div className="owner-section__titles">
          <h2 className="owner-section__about">ABOUT</h2>
          <h3 className="owner-section__name">ANSHUL HARDIYA</h3>
        </div>
      </div>

      <div className="owner-section__business-photo">
        <img 
          src="https://px-web-images1.pixpa.com/WMByvcYiUcBarYzM3_6S6nnUI5zPf3eh_kX6vLJNLxs/rs:fit:640:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTE0NTM5MTA4LWxpc3RpbmctcHJpY2luZ2d1aWRlLWxpc3RpbmcuanBn" 
          alt="Anshul Hardiya - Professional" 
          className="business-image"
        />
      </div>

      <div className="owner-section__content">
        <div className="owner-section__left">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5f2acb71ac645e641f13e1dc/1598899828997-EHLLVHAGHBZRG26AVYEB/headshot-photography-houston-texas-professional-business-man-in-suit.jpg" 
            alt="Anshul Hardiya - Meditation" 
            className="meditation-image"
          />
        </div>
        
        <div className="owner-section__right">
          <div className="owner-section__text">
            <p>
              This training approach blends sports science, strength training, passive stretching, animal
              flow, and martial arts to create a holistic movement system. Rooted in biomechanics
              and mental training, it is designed to optimize performance, enhance mobility,
              and promote overall well-being.
            </p>

            <p>
              With experience working alongside professional athletes, including boxers,
              national-level judokas, and MMA fighters, the focus remains on building strength,
              increasing flexibility, and preventing injuries. Each session is tailored to individual
              needs, ensuring sustainable progress and long-term results.
            </p>

            <p>
              By combining scientific principles with hands-on expertise, this method goes beyond
              traditional training. It empowers individuals to master their bodies, break limitations, and
              achieve peak physical and mental performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection; 