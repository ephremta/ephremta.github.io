import React from 'react';
import '../styles/components/Experience.css';

const experienceData = [
  {
    jobTitle: 'Senior Data Scientist',
    company: 'ABC Corp.',
    location: 'New York, NY',
    duration: 'Jan 2022 - Present',
    description:
      'Led a team to develop AI-driven solutions for optimizing financial processes. Built predictive models for risk assessment and fraud detection using machine learning.'
  },
  {
    jobTitle: 'Data Scientist',
    company: 'XYZ Ltd.',
    location: 'San Francisco, CA',
    duration: 'Mar 2019 - Dec 2021',
    description:
      'Developed machine learning models and implemented data pipelines for analyzing large datasets. Worked closely with the finance department to create data-driven insights for decision-making.'
  },
  {
    jobTitle: 'Junior Data Analyst',
    company: 'Tech Solutions',
    location: 'Boston, MA',
    duration: 'Jun 2017 - Feb 2019',
    description:
      'Assisted in the collection, cleaning, and analysis of data to improve company processes. Generated reports and insights that helped streamline business operations.'
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
