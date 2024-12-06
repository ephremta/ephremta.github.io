import React from 'react';
import '../styles/components/Hero.css';
import heroImage from '../assets/hero-image.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div className='image-container'>
          <img src={heroImage} alt='Hero' className='hero-image' />
        </div>

        <div className='text-content'>
          <h1>
            Hi, I'm <span>Ephrem T.</span>
          </h1>
          <p>A Senior Data Scientist</p>
          <div className='social-links'>
            <a
              href='https://github.com/ephremta'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/ephrem-tadesse-69304b93/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <FaLinkedin />
            </a>
            <a href='mailto:your.email@example.com' className='social-icon'>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
