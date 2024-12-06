import React from 'react';
import '../styles/components/Skills.css';

const skills = [
  'Python',
  'Java',
  'Shell Scripting',
  'Scikit-learn',
  'TensorFlow',
  'MLflow',
  'Kubeflow',
  'Kedro',
  'Redash',
  'Pandas',
  'FastAPI',
  'Flask',
  'AWS (S3, Lambda, EC2, RDS, EKS, CloudFormation)',
  'Docker',
  'Kubernetes',
  'Git',
  'Terraform',
  'ArgoCD',
  'GitOps',
  'Jira'
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
