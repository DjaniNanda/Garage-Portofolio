import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 40; 
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="/logo.png" 
              alt="Exact Automobile Logo - Garage Yaoundé" 
              className="logo-image"
              width="40"
              height="40"
            />
            <span className="logo-text">Exact Automobile</span>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Navigation principale">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className="nav-link"
              aria-label="Aller à la section Accueil"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="nav-link"
              aria-label="Aller à la section Services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-link"
              aria-label="Aller à la section À propos"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link"
              aria-label="Aller à la section Contact"
            >
              Contact
            </button>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;