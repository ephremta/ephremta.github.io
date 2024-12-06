import React from 'react';
import '../styles/components/Experience.css';

const experienceData = [
  {
    jobTitle: 'Lead Data Scientist',
    company: 'Kifiya Financial Technologies',
    location: 'Ethiopia',
    duration: 'Jan 2022 - November 2024',
    description:
      'Led credit scoring initiatives and implemented MLOps practices for digital lending platforms. Developed alternative data-driven credit scoring models, ensuring operational efficiency and scalability.'
  },
  {
    jobTitle: 'Senior Data Scientist',
    company: 'Tenacious Intelligence Corporation',
    location: 'Remote',
    duration: 'Mar 2019 - Dec 2021',
    description:
      'Developed machine learning models for risk assessment and fraud detection, while optimizing data pipelines for large-scale analytics. Delivered business intelligence insights to drive decision-making.'
  },
  {
    jobTitle: 'Text Data Analytics Team Leader',
    company: 'Ethiopian Artificial Intelligence Institute',
    location: 'Ethiopia',
    duration: 'Jun 2017 - Feb 2019',
    description:
      'Led projects in Natural Language Processing, implemented data pipelines for machine translation, and contributed to advancements in text analytics for Amharic language processing.'
  },
  {
    jobTitle: 'Lecturer',
    company: 'Jimma University',
    location: 'Ethiopia',
    duration: 'Sep 2014 - May 2017',
    description:
      'Developed and taught data science curriculum, mentored students in data analytics and machine learning, and conducted research in natural language processing.'
  }
];

const Experience = () => (
  <section className='experience' id='experience'>
    <div className='container'>
      <h2 className='section-title'>Experience</h2>
      <div className='experience-list'>
        {experienceData.map((job, index) => (
          <div className='experience-item' key={index}>
            <h3>{job.jobTitle}</h3>
            <p className='company'>{job.company}</p>
            <p className='location'>
              {job.location} | <span className='duration'>{job.duration}</span>
            </p>
            <p className='description'>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
