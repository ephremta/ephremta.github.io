import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/components/ProjectDetail.css';

const projects = [
  {
    id: '1',
    title: 'Adera Data Services & Setup API',
    description: 'Detailed description of the project...',
    demoLink: 'https://demo.adera.com',
    testLink: 'https://test.adera.com'
  }
  // Add other projects here
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className='project-detail'>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className='links'>
        <a
          href={project.demoLink}
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
        >
          View Demo
        </a>
        <a
          href={project.testLink}
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
        >
          Test Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
