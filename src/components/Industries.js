import React, { useState } from 'react';
import '../styles/components/Industries.css';
import industry from '../assets/industry.png';

const Industries = () => {
  const [activeTab, setActiveTab] = useState('Financial Institutions');

  const tabs = [
    'Financial Institutions',
    'Retail',
    'Digital merchants and E-commerce platforms',
    'SME lenders'
  ];

  return (
    <section className='industries-section'>
      <div className='container'>
        <h2 className='section-title'>Industries We Serve</h2>
        <p className='section-subtitle'>
          Data orchestration and risk decisioning process across identity,
          records, scoring, and rating.
        </p>

        <div className='tabs'>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='content'>
          <div className='content-text'>
            <h3>Create personalized, superior banking experiences.</h3>
            <p>
              To compete in today’s digital-first world, you need to offer
              innovative banking products, fast approvals, and a world-class
              consumer experience. But legacy decisioning technology – siloed
              data sources, disparate software systems, reliance on numerous
              vendors – can make this difficult for banks, if not impossible.
            </p>
          </div>
          <div className='content-image'>
            <img src={industry} alt='Banking' className='industries-image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
