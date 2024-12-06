import React, { useState } from 'react';
import '../styles/components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email or post to a server)
    alert('Form submitted');
  };

  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <h2 className='section-title'>Contact</h2>
        <form onSubmit={handleSubmit} className='contact-form'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type='submit' className='btn'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
