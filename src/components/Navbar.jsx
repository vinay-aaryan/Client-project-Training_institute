import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdHeight } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style= {{height: '144px'}} >
      <div className="navbar__logo">
      <Link to="/"> <img className='h-30 w-30' src="./mainLogo.png" alt=""/> </Link> 
        {/* Fitness Folks<*/}
      
      </div>
      
      <button className="navbar__mobile-toggle" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`navbar__links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className="navbar__link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        <Link to="/services" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/portfolio" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
        <Link to="/contact" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>

      <div className={`navbar__cta ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/get-started" className="navbar__button" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;

