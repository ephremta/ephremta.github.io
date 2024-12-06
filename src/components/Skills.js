import React from 'react';
import '../styles/components/Skills.css';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Machine Learning',
  'SQL',
  'Docker',
  'Kubernetes',
  'AWS',
  'MongoDB',
  'Git',
  'RESTful APIs',
  'GraphQL'
];

const Skills = () => (
  <section className='skills' id='skills'>
    <div className='container'>
      <h2 className='section-title'>Skills</h2>
      <div className='skills-list'>
        {skills.map((skill, index) => (
          <div className='skill' key={index}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
