import React from 'react';
import '../styles/components/Services.css';

const Services = () => {
  const services = [
    {
      title: 'API-based Integration',
      description: 'Seamlessly integrate our solutions into your workflow.',
      icon: 'icon-service-1.png'
    },
    {
      title: 'Customizable Risk Engines',
      description: 'Tailor risk engines to suit your unique requirements.',
      icon: 'icon-service-2.png'
    },
    {
      title: 'On-Demand Model Training',
      description: 'Train AI models to adapt to your specific business needs.',
      icon: 'icon-service-3.png'
    },
    {
      title: 'Support for Product Teams',
      description: 'Get dedicated support for product development teams.',
      icon: 'icon-service-4.png'
    }
  ];

  return (
    <div className='services'>
      <h2>Our Services</h2>
      <div className='services-list'>
        {services.map((service, index) => (
          <div className='service-card' key={index}>
            <div className='service-icon'>
              <img src={service.icon} alt={`${service.title} icon`} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
