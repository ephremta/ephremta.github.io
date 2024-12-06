import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Importing react-scroll Link
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import BlogDetail from './components/BlogDetail';
import Blogs from './components/Blogs'; // Updated import for Blogs

import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* Navigation */}
        <nav className='navbar'>
          <ScrollLink
            to='hero'
            smooth={true}
            duration={500}
            className='navbar-link'
          >
            Home
          </ScrollLink>
          <ScrollLink
            to='about'
            smooth={true}
            duration={500}
            className='navbar-link'
          >
            About
          </ScrollLink>
          <ScrollLink
            to='skills'
            smooth={true}
            duration={500}
            className='navbar-link'
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to='projects'
            smooth={true}
            duration={500}
            className='navbar-link'
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to='experience'
            smooth={true}
            duration={500}
            className='navbar-link'
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to='blog'
            smooth={true}
            duration={500}
            className='navbar-link'
          >
            Blog
          </ScrollLink>
          <ScrollLink
            to='contact'
            smooth={true}
            duration={500}
            className='navbar-link'
          >
            Contact
          </ScrollLink>
        </nav>

        {/* Main Sections */}
        <Routes>
          <Route
            path='/'
            element={
              <>
                <section id='hero'>
                  <Hero />
                </section>
                <section id='about'>
                  <About />
                </section>
                <section id='skills'>
                  <Skills />
                </section>
                <section id='projects'>
                  <Projects />
                </section>
                <section id='experience'>
                  <Experience />
                </section>
                <section id='blog'>
                  <Blogs /> {/* Updated to use Blogs component */}
                </section>
                <section id='contact'>
                  <Contact />
                </section>
              </>
            }
          />
          <Route path='/blog' element={<Blogs />} /> {/* Blog List page */}
          <Route path='/blog/:id' element={<BlogDetail />} />{' '}
          {/* Blog Detail for individual posts */}
        </Routes>

        {/* Footer */}
        <footer className='footer'>
          <p>© {new Date().getFullYear()} Ephrem T. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
