import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jean-Claude Mbarga",
      vehicle: "Toyota Camry",
      rating: 5,
      text: "Excellent service chez Exact Automobile ! Mon véhicule a été réparé rapidement et le prix était très raisonnable. Je recommande vivement ce garage à Yaoundé.",
      date: "Il y a 2 semaines"
    },
    {
      name: "Marie Fotso",
      vehicle: "Honda CR-V",
      rating: 5,
      text: "Professionnalisme exemplaire ! L'équipe d'Exact Automobile connaît vraiment son métier. Diagnostic précis et réparation efficace.",
      date: "Il y a 1 mois"
    },
    {
      name: "Paul Nkomo",
      vehicle: "Nissan Pathfinder",
      rating: 5,
      text: "Très satisfait de ma révision chez Exact Automobile. Personnel accueillant, travail soigné et respect des délais. Le meilleur garage de Mimboman !",
      date: "Il y a 3 semaines"
    }
  ];

  const openWhatsApp = () => {
    const phoneNumber = "+237680075429";
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return React.createElement('section', { className: 'testimonials' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'testimonials-header fade-in-up' },
        React.createElement('h2', null, 'Ce que disent nos clients'),
        React.createElement('p', null, 'La satisfaction de nos clients est notre plus belle récompense')
      ),
      React.createElement('div', { className: 'testimonials-grid' },
        testimonials.map((testimonial, index) =>
          React.createElement('div', {
            key: index,
            className: 'testimonial-card fade-in-up',
            style: { animationDelay: `${index * 0.1}s` }
          },
            React.createElement('div', { className: 'testimonial-quote' },
              React.createElement(Quote)
            ),
            React.createElement('div', { className: 'testimonial-rating' },
              [...Array(testimonial.rating)].map((_, i) =>
                React.createElement(Star, { key: i, className: 'star-filled' })
              )
            ),
            React.createElement('p', { className: 'testimonial-text' }, `"${testimonial.text}"`),
            React.createElement('div', { className: 'testimonial-author' },
              React.createElement('div', { className: 'author-info' },
                React.createElement('h4', null, testimonial.name),
                React.createElement('span', { className: 'author-vehicle' }, testimonial.vehicle)
              ),
              React.createElement('span', { className: 'testimonial-date' }, testimonial.date)
            )
          )
        )
      ),
      React.createElement('div', { className: 'testimonials-cta fade-in-up' },
        React.createElement('h3', null, 'Rejoignez nos clients satisfaits'),
        React.createElement('p', null, 'Faites confiance à notre expertise pour l\'entretien de votre véhicule'),
        React.createElement('button', {
          className: 'btn btn-primary',
          onClick: openWhatsApp
        }, 'Prendre rendez-vous')
      )
    )
  );
};

export default Testimonials;