import React, { useState } from 'react';
import '../styles/components/Faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is your pricing model?',
      answer: 'Our pricing is based on usage and customization requirements.'
    },
    {
      question: 'How secure is your platform?',
      answer: 'We prioritize security with advanced encryption and compliance.'
    },
    {
      question: 'Can I integrate this with existing systems?',
      answer: 'Yes, our APIs are designed for seamless integration.'
    }
  ];

  return (
    <div className='faq'>
      <h2>Frequently Asked Questions</h2>
      <div className='faq-items'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
            role='button'
            tabIndex={0} // Allows the item to be focusable via keyboard
            aria-expanded={activeIndex === index ? 'true' : 'false'} // Accessibility improvement
            aria-controls={`faq-answer-${index}`} // Improves screen reader support
            onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(index)} // Allows for keyboard navigation
          >
            <h3>{faq.question}</h3>
            {activeIndex === index && (
              <p id={`faq-answer-${index}`} aria-hidden={activeIndex !== index}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
