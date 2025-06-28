import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+237680075429";
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return React.createElement('footer', { className: 'footer' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'footer-content' },
        React.createElement('div', { className: 'footer-section' },
          React.createElement('div', { className: 'footer-logo' },
            React.createElement('img', {
              src: '/images.jfif',
              alt: 'Exact Automobile Logo',
              className: 'footer-logo-image'
            }),
            React.createElement('span', null, 'Exact Automobile')
          ),
          React.createElement('p', { className: 'footer-description' },
            'Votre garage de confiance à Terminus Mimboman, Yaoundé. Expertise, qualité et service client au cœur de nos priorités.'
          ),
          React.createElement('button', { onClick: openWhatsApp, className: 'footer-whatsapp' },
            React.createElement(MessageCircle),
            React.createElement('span', null, 'WhatsApp')
          )
        ),
        React.createElement('div', { className: 'footer-section' },
          React.createElement('h3', null, 'Navigation'),
          React.createElement('ul', { className: 'footer-links' },
            React.createElement('li', null,
              React.createElement('button', { onClick: () => scrollToSection('accueil') }, 'Accueil')
            ),
            React.createElement('li', null,
              React.createElement('button', { onClick: () => scrollToSection('services') }, 'Services')
            ),
            React.createElement('li', null,
              React.createElement('button', { onClick: () => scrollToSection('about') }, 'À propos')
            ),
            React.createElement('li', null,
              React.createElement('button', { onClick: () => scrollToSection('contact') }, 'Contact')
            )
          )
        ),
        React.createElement('div', { className: 'footer-section' },
          React.createElement('h3', null, 'Nos Services'),
          React.createElement('ul', { className: 'footer-links' },
            React.createElement('li', null, 'Réparation moteur'),
            React.createElement('li', null, 'Entretien automobile'),
            React.createElement('li', null, 'Diagnostic électronique'),
            React.createElement('li', null, 'Système de freinage'),
            React.createElement('li', null, 'Pneumatiques'),
            React.createElement('li', null, 'Climatisation')
          )
        ),
        React.createElement('div', { className: 'footer-section' },
          React.createElement('h3', null, 'Contact'),
          React.createElement('div', { className: 'footer-contact' },
            React.createElement('div', { className: 'contact-item' },
              React.createElement(MapPin),
              React.createElement('span', null, 'Terminus Mimboman', React.createElement('br'), 'Yaoundé, Cameroun')
            ),
            React.createElement('div', { className: 'contact-item' },
              React.createElement(Phone),
              React.createElement('span', null, '+237 6 80 07 54 29')
            ),
            React.createElement('div', { className: 'contact-item' },
              React.createElement(Mail),
              React.createElement('span', null, 'contact@exactautomobile.cm')
            ),
            React.createElement('div', { className: 'contact-item' },
              React.createElement(Clock),
              React.createElement('span', null, 'Lun-Ven: 8h00-17h30', React.createElement('br'), 'Sam: 8h00h-14h00')
            )
          )
        )
      ),
      React.createElement('div', { className: 'footer-bottom' },
        React.createElement('div', { className: 'footer-bottom-content' },
          React.createElement('p', null, '© 2024 Exact Automobile. Tous droits réservés.'),
          React.createElement('div', { className: 'footer-legal' },
            React.createElement('span', null, 'Mentions légales'),
            React.createElement('span', null, '•'),
            React.createElement('span', null, 'Politique de confidentialité'),
            React.createElement('span', null, '•'),
            React.createElement('span', null, 'CGV')
          )
        )
      )
    )
  );
};

export default Footer;