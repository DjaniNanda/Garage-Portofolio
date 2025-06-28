import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+237680075429";
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return React.createElement('section', { id: 'accueil', className: 'hero' },
    React.createElement('div', { className: 'hero-background' },
      React.createElement('img', {
        src: '/IMG-20250625-WA0010.jpg',
        alt: 'Exact Automobile - Garage moderne à Terminus Mimboman, Yaoundé',
        className: 'hero-image',
        loading: 'eager',
        width: '1920',
        height: '1080'
      }),
      React.createElement('div', { className: 'hero-overlay' })
    ),
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'hero-content' },
        React.createElement('div', { className: 'hero-text fade-in-up' },
          React.createElement('div', { className: 'hero-badge' },
            React.createElement(Star, { className: 'badge-icon', 'aria-hidden': 'true' }),
            React.createElement('span', null, 'Garage de confiance à Yaoundé')
          ),
          React.createElement('h1', null, 'Exact Automobile - Votre partenaire mécanique à Yaoundé'),
          React.createElement('p', null, 'Situé à Terminus Mimboman, Yaoundé, notre équipe de plus de 20 mécaniciens experts s\'occupe de votre véhicule avec professionnalisme et précision. Diagnostic, réparation, entretien - nous maîtrisons tous les aspects de la mécanique automobile.'),
          React.createElement('div', { className: 'hero-buttons' },
            React.createElement('button', {
              onClick: openWhatsApp,
              className: 'btn btn-whatsapp',
              'aria-label': 'Prendre rendez-vous via WhatsApp'
            },
              React.createElement(MessageCircle, { 'aria-hidden': 'true' }),
              'Prendre rendez-vous'
            ),
            React.createElement('button', {
              onClick: () => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              },
              className: 'btn btn-secondary',
              'aria-label': 'Voir nos services'
            }, 'Nos services')
          )
        ),
        React.createElement('div', { className: 'hero-stats slide-in-right' },
          React.createElement('div', { className: 'stat-item' },
            React.createElement('div', { className: 'stat-number' }, '1000+'),
            React.createElement('div', { className: 'stat-label' }, 'Véhicules réparés')
          ),
          React.createElement('div', { className: 'stat-item' },
            React.createElement('div', { className: 'stat-number' }, '20+'),
            React.createElement('div', { className: 'stat-label' }, 'Mécaniciens experts')
          ),
          React.createElement('div', { className: 'stat-item' },
            React.createElement('div', { className: 'stat-number' }, '100%'),
            React.createElement('div', { className: 'stat-label' }, 'Satisfaction client')
          )
        )
      )
    )
  );
};

export default Hero;