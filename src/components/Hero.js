import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>Scoring Everything</h1>
        <p>
          Empowering financial institutions with cutting-edge AI technology,
          delivering smarter, faster, and data-driven credit decisions at scale.
        </p>
        <button className='hero-button'>Watch Demo</button>
      </div>
    </div>
  );
};

export default Hero;
