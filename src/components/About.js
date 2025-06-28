import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: React.createElement(Award),
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque intervention sur votre véhicule"
    },
    {
      icon: React.createElement(Heart),
      title: "Passion",
      description: "Notre passion pour l'automobile guide notre travail quotidien"
    },
    {
      icon: React.createElement(Users),
      title: "Équipe",
      description: "Une équipe soudée de plus de 20 mécaniciens expérimentés"
    },
    {
      icon: React.createElement(Clock),
      title: "Disponibilité",
      description: "Service rapide et efficace pour minimiser votre temps d'attente"
    }
  ];

  return React.createElement('section', { id: 'about', className: 'about' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'about-content' },
        React.createElement('div', { className: 'about-text fade-in-up' },
          React.createElement('h2', null, 'À Propos d\'Exact Automobile'),
          React.createElement('p', { className: 'about-intro' },
            'Situé au cœur de Terminus Mimboman à Yaoundé, Exact Automobile est votre garage de référence pour tous vos besoins en mécanique automobile. Notre équipe de mécaniciens qualifiés met son expertise au service de votre mobilité depuis plusieurs années.'
          ),
          React.createElement('div', { className: 'about-story' },
            React.createElement('h3', null, 'Notre Expertise'),
            React.createElement('p', null,
              'Chez Exact Automobile, nous combinons savoir-faire traditionnel et technologies modernes pour offrir des services de qualité supérieure. Notre atelier est équipé des derniers outils de diagnostic et notre équipe est formée aux techniques les plus récentes de la mécanique automobile.'
            )
          ),
          React.createElement('div', { className: 'about-expertise' },
            React.createElement('h3', null, 'Nos Spécialités'),
            React.createElement('ul', null,
              React.createElement('li', null, 'Diagnostic électronique avancé toutes marques'),
              React.createElement('li', null, 'Réparation moteur essence et diesel'),
              React.createElement('li', null, 'Entretien préventif et curatif'),
              React.createElement('li', null, 'Système de freinage et suspension'),
              React.createElement('li', null, 'Climatisation automobile'),
              React.createElement('li', null, 'Électricité et électronique automobile')
            )
          )
        ),
        React.createElement('div', { className: 'about-image slide-in-right' },
          React.createElement('img', {
            src: '/495177214_1241509317979575_6219899708439107088_n.jpg',
            alt: 'Équipe de mécaniciens experts d\'Exact Automobile à Yaoundé',
            loading: 'lazy',
            width: '600',
            height: '400'
          }),
          React.createElement('div', { className: 'image-overlay' },
            React.createElement('div', { className: 'overlay-content' },
              React.createElement('h4', null, 'Notre Équipe'),
              React.createElement('p', null, 'Plus de 20 mécaniciens experts à votre service')
            )
          )
        )
      ),
      React.createElement('div', { className: 'about-values' },
        React.createElement('h3', { className: 'values-title fade-in-up' }, 'Nos Valeurs'),
        React.createElement('div', { className: 'values-grid' },
          values.map((value, index) =>
            React.createElement('div', {
              key: index,
              className: 'value-card fade-in-up',
              style: { animationDelay: `${index * 0.1}s` }
            },
              React.createElement('div', { className: 'value-icon', 'aria-hidden': 'true' }, value.icon),
              React.createElement('h4', null, value.title),
              React.createElement('p', null, value.description)
            )
          )
        )
      )
    )
  );
};

export default About;