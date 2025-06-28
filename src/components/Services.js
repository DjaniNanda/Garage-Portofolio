import React from 'react';
import { Wrench, Car, Gauge, Zap, Settings, Shield } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: React.createElement(Wrench),
      title: "Réparation Moteur",
      description: "Diagnostic et réparation complète de tous types de moteurs avec notre équipe d'experts.",
      features: ["Diagnostic électronique", "Réparation complexe", "Toutes marques"]
    },
    {
      icon: React.createElement(Car),
      title: "Entretien Automobile",
      description: "Vidange, filtres, révision complète selon les recommandations constructeur.",
      features: ["Vidange huile moteur", "Changement filtres", "Révision périodique"]
    },
    {
      icon: React.createElement(Gauge),
      title: "Diagnostic Électronique",
      description: "Diagnostic complet avec équipements professionnels de dernière génération.",
      features: ["Valise diagnostic", "Lecture codes erreur", "Rapport détaillé"]
    },
    {
      icon: React.createElement(Shield),
      title: "Système de Freinage",
      description: "Contrôle et remplacement des éléments de freinage pour votre sécurité.",
      features: ["Plaquettes de frein", "Disques de frein", "Liquide de frein"]
    },
    {
      icon: React.createElement(Settings),
      title: "Pneumatiques",
      description: "Montage, équilibrage et géométrie pour une conduite optimale et sécurisée.",
      features: ["Montage pneus", "Équilibrage roues", "Géométrie train avant"]
    },
    {
      icon: React.createElement(Zap),
      title: "Climatisation",
      description: "Entretien et réparation des systèmes de climatisation automobile.",
      features: ["Recharge gaz R134a", "Diagnostic panne", "Nettoyage circuit"]
    }
  ];

  return React.createElement('section', { id: 'services', className: 'services' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'services-header fade-in-up' },
        React.createElement('h2', null, 'Nos Services'),
        React.createElement('p', null, 'Une gamme complète de services pour l\'entretien et la réparation de votre véhicule à Yaoundé')
      ),
      React.createElement('div', { className: 'services-grid' },
        services.map((service, index) =>
          React.createElement('div', {
            key: index,
            className: 'service-card fade-in-up',
            style: { animationDelay: `${index * 0.1}s` }
          },
            React.createElement('div', { className: 'service-icon' }, service.icon),
            React.createElement('h3', null, service.title),
            React.createElement('p', null, service.description),
            React.createElement('ul', { className: 'service-features' },
              service.features.map((feature, idx) =>
                React.createElement('li', { key: idx }, feature)
              )
            )
          )
        )
      )
    )
  );
};

export default Services;