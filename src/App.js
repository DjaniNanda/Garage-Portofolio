import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Testimonials from './components/Testimonials.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import SEO from './components/SEO.js';
import './App.css';

function App() {
  return React.createElement('div', { className: 'App' },
    React.createElement(SEO),
    React.createElement(Header),
    React.createElement(Hero),
    React.createElement(Services),
    React.createElement(About),
    React.createElement(Testimonials),
    React.createElement(Contact),
    React.createElement(Footer)
  );
}

export default App;