import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import BlogDetail from './components/BlogDetail';
import Blog from './components/Blog';
import './styles/global.css';

const App = () => {
  return (     
    <Router>
      <div className='app'>
        {/* Navigation */}
        <nav className='navbar'>
          <a href='#hero'>Home</a>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Contact</a>
          <a href='#blog'>Blog</a> {/* Link to the Blog List page */}
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
                <section id='blog'>
                  <Blog />
                </section>
              </>
            }
          />
          <Route path='/blog' element={<Blog />} /> {/* Blog List page */}
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
