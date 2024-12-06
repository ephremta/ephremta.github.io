import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* Navigation (Optional if you want sticky scrolling links) */}
        <nav className='navbar'>
          <a href='#hero'>Home</a>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Contact</a>
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
                <section id='contact'>
                  <Contact />
                </section>
              </>
            }
          />
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
