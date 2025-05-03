import React from 'react';
import './StuckSection.css';

const StuckSection = () => {
  return (
    <section className="stuck-section">
      <div className="stuck-section__top">
        <p className="stuck-section__header-text">
          WE HAVE BECOME SO DISCONNECTED FROM OUR BODY. WE HAVE BECOME SO LIMITED IN
          THE WAY WE MOVE. THE SAME PATTERN OF MOVEMENT. OVER AND OVER AGAIN.
        </p>

        <div className="stuck-section__days">
          <p>DAY</p>
          <p>AFTER</p>
          <p>DAY</p>
        </div>

        <p className="stuck-section__result">THE RESULT?</p>
      </div>

      <div className="stuck-section__middle">
        <h2 className="stuck-section__title">WE GET STUCK</h2>
        <p className="stuck-section__subtitle">
          WE LIMIT OURSELVES, PHYSICALLY AND<br />
          MENTALLY. WE DIE - WHILE WE ARE STILL ALIVE.
        </p>
      </div>

      <div className="stuck-section__bottom">
        <div className="stuck-section__change">
          <h2>
            ITS<br />
            TIME<br />
            FOR<br />
            A<br />
            CHANGE
          </h2>
        </div>
        <div className="stuck-section__image">
          <img src="./photo2.jpeg" alt="Woman in athletic wear" />
        </div>
      </div>

      <div className="stuck-section__footer">
        <p>We are made to move, to jump, to roll, to balance!</p>
        <p>We are made to learn and to explore!</p>
        <p>We are made to challenge our body and our mind!</p>
      </div>
    </section>
  );
};

export default StuckSection; 