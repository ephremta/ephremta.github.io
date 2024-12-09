import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';
import logo from '../assets/logo.png'; // Replace with your actual logo path

// Social media links can be managed in an array to avoid repetition and ease of updates
const socialLinks = [
  { name: 'Facebook', iconClass: 'fab fa-facebook', url: '#' },
  { name: 'Twitter', iconClass: 'fab fa-twitter', url: '#' },
  { name: 'LinkedIn', iconClass: 'fab fa-linkedin', url: '#' },
  { name: 'Instagram', iconClass: 'fab fa-instagram', url: '#' }
];

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/industries', label: 'Industries' },
  { to: '/developers', label: 'Developers' },
  { to: '/contact', label: 'Contact' }
];

const Footer = () => {
  return (
    <footer className='footer'>
      {/* Top Section */}
      <div className='footer-top'>
        <div className='footer-logo'>
          {/* Logo Image */}
          <img src={logo} alt='Bankbits Logo' />
        </div>
        <nav className='footer-nav'>
          <Link to='/about'>About Us</Link>
          <Link to='/services'>Our Services</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/blog'>Blog</Link>
        </nav>
      </div>

      {/* Main Footer Links */}
      <div className='footer-content'>
        <ul className='footer-links'>
          {footerLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className='footer-socials'>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className={social.iconClass}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section with Copyright */}
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} Bankbits. All rights reserved.</p>
        <p>
          <Link to='/privacy-policy'>Privacy Policy</Link> |{' '}
          <Link to='/terms-of-service'>Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
