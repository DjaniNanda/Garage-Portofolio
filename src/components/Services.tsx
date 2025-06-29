import React from 'react';
import { Wrench, Car, Gauge, Zap, Settings, Shield } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wrench />,
      title: "Réparation Moteur",
      description: "Diagnostic et réparation complète de tous types de moteurs avec notre équipe d'experts.",
      features: ["Diagnostic électronique", "Réparation complexe", "Toutes marques"]
    },
    {
      icon: <Car />,
      title: "Entretien Automobile",
      description: "Vidange, filtres, révision complète selon les recommandations constructeur.",
      features: ["Vidange huile moteur", "Changement filtres", "Révision périodique"]
    },
    {
      icon: <Gauge />,
      title: "Diagnostic Électronique",
      description: "Diagnostic complet avec équipements professionnels de dernière génération.",
      features: ["Valise diagnostic", "Lecture codes erreur", "Rapport détaillé"]
    },
    {
      icon: <Shield />,
      title: "Système de Freinage",
      description: "Contrôle et remplacement des éléments de freinage pour votre sécurité.",
      features: ["Plaquettes de frein", "Disques de frein", "Liquide de frein"]
    },
    {
      icon: <Settings />,
      title: "Pneumatiques",
      description: "Montage, équilibrage et géométrie pour une conduite optimale et sécurisée.",
      features: ["Montage pneus", "Équilibrage roues", "Géométrie train avant"]
    },
    {
      icon: <Zap />,
      title: "Climatisation",
      description: "Entretien et réparation des systèmes de climatisation automobile.",
      features: ["Recharge gaz R134a", "Diagnostic panne", "Nettoyage circuit"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header fade-in-up">
          <h2>Nos Services</h2>
          <p>Une gamme complète de services pour l'entretien et la réparation de votre véhicule à Yaoundé</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;