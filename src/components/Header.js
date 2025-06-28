import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return React.createElement('header', { className: `header ${isScrolled ? 'scrolled' : ''}` },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'header-content' },
        React.createElement('div', { className: 'logo' },
          React.createElement('img', {
            src: '/images.jfif',
            alt: 'Exact Automobile Logo - Garage Yaoundé',
            className: 'logo-image',
            width: '40',
            height: '40'
          }),
          React.createElement('span', { className: 'logo-text' }, 'Exact Automobile')
        ),
        React.createElement('nav', {
          className: `nav ${isMobileMenuOpen ? 'nav-open' : ''}`,
          role: 'navigation',
          'aria-label': 'Navigation principale'
        },
          React.createElement('button', {
            onClick: () => scrollToSection('accueil'),
            className: 'nav-link',
            'aria-label': 'Aller à la section Accueil'
          }, 'Accueil'),
          React.createElement('button', {
            onClick: () => scrollToSection('services'),
            className: 'nav-link',
            'aria-label': 'Aller à la section Services'
          }, 'Services'),
          React.createElement('button', {
            onClick: () => scrollToSection('about'),
            className: 'nav-link',
            'aria-label': 'Aller à la section À propos'
          }, 'À propos'),
          React.createElement('button', {
            onClick: () => scrollToSection('contact'),
            className: 'nav-link',
            'aria-label': 'Aller à la section Contact'
          }, 'Contact')
        ),
        React.createElement('button', {
          className: 'mobile-menu-toggle',
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          'aria-label': isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu',
          'aria-expanded': isMobileMenuOpen
        }, isMobileMenuOpen ? React.createElement(X) : React.createElement(Menu))
      )
    )
  );
};

export default Header;