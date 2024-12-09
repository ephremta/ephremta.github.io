// src/components/About.js
import React from 'react';
import '../styles/components/About.css';
import dashboard from '../assets/dashboard.png';
const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className='about-header'>
        <h1>
          No-code AI-driven Credit Risk Assessment for Smart Lending Decisions
        </h1>
        <p>
          AI-powered risk assessment platform empowers financial institutions
          including banks, microfinance institutions, credit unions, and fintech
          companies to make more informed, data-driven decisions.
        </p>
        <div className='action-buttons'>
          <button className='btn-demo'>Request a demo</button>
          <button className='btn-trial'>Start Free Trial</button>
        </div>
      </div>
      <div className='about-image'>
        <img
          src={dashboard}
          alt='AI-powered Credit Risk Dashboard'
          className='dashboard-image'
        />
      </div>
    </div>
  );
};

export default AboutPage;
