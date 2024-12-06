import React from 'react';
import '../styles/components/Projects.css';

const projects = [
  {
    title: 'Adera Data Services & Setup API',
    description:
      "Designed and implemented a comprehensive, modern microservices architecture for BahirBits Fintech Solutions. This microservice ecosystem includes components for user data setup, configuration management, and client authentication. The service empowers clients to create detailed applicant profiles, incorporating KYC, income profiles, business information, and transaction history. Configuration management allows clients to define decision rules, screening criteria, and model scoring weights specific to each product offering. Additionally, clients can define custom products within the supported categories, enabling flexibility in their financial services offerings. This API service facilitates client registration, authentication, and user data creation, providing them with access to BahirBits' scoring sandbox environment for experimentation. The solution is built on Kubernetes, FastAPI, and PostgreSQL (version 13), with critical endpoints secured using JWT bearer tokens for enhanced security and access control.",
    link: '#'
  },
  {
    title: 'Credit Scoring Engine for a Digital Lending Platform',
    description:
      'Developed an alternative, data-driven credit scoring and decisioning platform tailored for short-tenure loan products. Leveraging AWS services, FastAPI, Docker, MLflow, Kubeflow, and Feast, I implemented and deployed multiple machine learning models to provide configurable and scalable scoring solutions. I designed and established fully automated MLOps pipelines to ensure seamless model integration, deployment, and operational efficiency. Throughout the process, I focused on monitoring performance metrics and model stability, ensuring robustness to data shifts and noise. The platform successfully processed over 1,000,000 requests with consistently low response times of under 1 second, serving a diverse user base of 60,000 unique customers over the course of one year.',
    link: '#'
  },

  {
    title:
      'Implementation of Datalake and Analytics Tool for Financial Report Data',
    description:
      'Developed an ETL pipeline and analytics dashboards to extract and analyze over six years of financial report data for an edutech company. Leveraged AWS services (S3, EC2, RDS, Lambda), Kedro, and Redash to integrate financial data with ledger software, enabling comprehensive financial reporting and data-driven insights. The solution empowered users to make more informed decisions and optimize financial activities.',
    link: '#'
  },

  {
    title:
      'End-to-End Monitoring and Evaluation (M & E) KPI Metadata Mapping Data Pipeline',
    description:
      'Built an end-to-end ETL pipeline for an edutech company, integrating three years of OKR planning data with their existing resources. Using AWS services (S3, EC2, RDS, Lambda) and Kedro, I implemented semantic keyphrase embedding and graph techniques to resolve hierarchical-based conceptual data mapping and grouping challenges. This resulted in actionable KPI and OKR analytics dashboards, enabling better monitoring of progress and alignment of goals.',
    link: '#'
  },

  {
    title: 'Personalized Document Support Conversational Bot',
    description:
      'Developed a conversational bot powered by OpenAI GPT-3.5, integrating Langchain and FastAPI with JavaScript to provide document-based question answering. The bot improved accessibility to complex financial data by simplifying reports and analytics insights, enabling users to interact with documents in a natural language and get actionable answers. This solution enhanced the overall usability of financial reports and facilitated quick data insights for users.',
    link: '#'
  },

  {
    title: 'Event and Temporal Information Extraction from Amharic Text',
    description:
      'Created methods for extracting event and temporal information from Amharic text, leveraging Python, LSTM, and TensorFlow. I constructed a specialized dataset of unstructured, temporal-triggered news headlines in Amharic and employed rule-based approaches along with machine learning models to resolve challenges related to disambiguating deverbal nominal entities. This solution advanced the ability to process and understand complex Amharic text for event and temporal information extraction.',
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
