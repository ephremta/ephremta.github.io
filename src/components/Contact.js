import React, { useState } from 'react';
import '../styles/components/Contact.css';
import emailjs from 'emailjs-com';

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
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    // Environment variables for sensitive information
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Your EmailJS service ID from .env
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Your EmailJS template ID from .env
    const userID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; // Your EmailJS user ID from .env

    // Ensure service, template, and user IDs are not undefined
    if (!serviceID || !templateID || !userID) {
      alert('EmailJS configuration is missing!');
      return;
    }

    // Send the email using EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((error) => {
        console.error(error.text);
        alert('Failed to send message, please try again later.');
      });
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
