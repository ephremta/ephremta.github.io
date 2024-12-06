import React from 'react';
import '../styles/components/Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'A description of the first project.',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A description of the second project.',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A description of the third project.',
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
