import React from 'react';
import '../styles/components/Projects.css';

const projects = [
  {
    title: 'Credit Scoring Engine for a Digital Lending Platform',
    description:
      'Developed an alternative data-driven credit scoring and configurable decisioning platform for short-tenure loan products. Implemented and deployed multiple machine learning models, establishing fully automated MLOps pipelines.',
    link: '#'
  },
  {
    title:
      'Implementation of Datalake and Analytics Tool for Financial Report Data',
    description:
      'Built an ETL pipeline and analytics dashboards for extracting and analyzing over six years of financial report data, enabling actionable insights into financial activities.',
    link: '#'
  },
  {
    title:
      'End-to-End Monitoring and Evaluation (M & E) KPI Metadata Mapping Data Pipeline',
    description:
      'Developed an ETL pipeline for integrating KPI and OKR planning data. Implemented semantic keyphrase embedding and graph techniques to resolve hierarchical-based conceptual data mapping and grouping challenges.',
    link: '#'
  },
  {
    title: 'Personalized Document Support Conversational Bot',
    description:
      'Created an OpenAI GPT-3.5-powered bot for document-based question answering, simplifying complex financial data for actionable insights.',
    link: '#'
  },
  {
    title: 'Event and Temporal Information Extraction from Amharic Text',
    description:
      'Developed methods for extracting event and temporal information from Amharic text, addressing challenges in disambiguating deverbal nominal entities using rule-based and machine learning models.',
    link: '#'
  }
];

const Projects = () => (
  <section className='projects' id='projects'>
    <div className='container'>
      <h2 className='section-title'>Projects</h2>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div className='project' key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className='btn'>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
