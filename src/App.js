import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link as ScrollLink, Events } from 'react-scroll';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Blogs from './components/Blogs';
import FAQ from './components/Faq';
import Industries from './components/Industries';
import Footer from './components/Footer';
import BlogDetail from './components/BlogDetail';
import logo from './assets/logo.png';
import './styles/global.css';

const App = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  // Handle scroll event to toggle navbar styles
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active section after scroll event
  React.useEffect(() => {
    Events.scrollEvent.register('end', (to) => setActiveSection(to));
    return () => Events.scrollEvent.remove('end');
  }, []);

  return (
    <Router>
      <div className='app'>
        {/* Navigation */}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          {/* Logo */}
          <a href='/' className='navbar-logo' aria-label='Home'>
            <img src={logo} alt='Logo' />
          </a>

          {/* Links */}
          <ul className='navbar-links'>
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'products', label: 'Products' },
              { id: 'industries', label: 'Industries' },
              { id: 'faq', label: 'FAQ' },
              { id: 'blog', label: 'Blog' }
            ].map((section) => (
              <li key={section.id}>
                <ScrollLink
                  to={section.id}
                  smooth={true}
                  duration={500}
                  className={`navbar-link ${activeSection === section.id ? 'active' : ''}`}
                >
                  {section.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Search Bar and Buttons */}
          <div className='navbar-right'>
            <input
              type='text'
              className='search-bar'
              placeholder='Search...'
              aria-label='Search'
            />
            <button className='navbar-button outlined' aria-label='Sign In'>
              Sign In
            </button>
            <button className='navbar-button primary' aria-label='Call Sales'>
              Call Sales
            </button>
          </div>
        </nav>

        {/* Main Sections */}
        <Routes>
          <Route
            path='/'
            element={
              <>
                <section id='about'>
                  <About />
                </section>
                <section id='hero'>
                  <Hero />
                </section>
                <section id='services'>
                  <Services />
                </section>
                <section id='products'>
                  <Products />
                </section>
                <section id='industries'>
                  <Industries />
                </section>
                <section id='faq'>
                  <FAQ />
                </section>
                <section id='blog'>
                  <Blogs />
                </section>
              </>
            }
          />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
