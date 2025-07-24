import React from 'react';
import { Wrench, Car, Gauge, Zap, Settings, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+237680075429"; 
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: <Wrench />,
      title: "Réparation Moteur",
      description: "Diagnostic et réparation complète de tous types de moteurs avec notre équipe d'experts.",
      features: ["Diagnostic électronique", "Réparation complexe", "Toutes marques"],
      price: "À partir de 150€",
      rating: 4.9,
      image: "/12.jpg" // Add your image path
    },
    {
      icon: <Car />,
      title: "Entretien Automobile",
      description: "Vidange, filtres, révision complète selon les recommandations constructeur.",
      features: ["Vidange huile moteur", "Changement filtres", "Révision périodique"],
      price: "À partir de 80€",
      rating: 4.8,
      image: "/11.jpeg"
    },
    {
      icon: <Gauge />,
      title: "Diagnostic Électronique",
      description: "Diagnostic complet avec équipements professionnels de dernière génération.",
      features: ["Valise diagnostic", "Lecture codes erreur", "Rapport détaillé"],
      price: "À partir de 50€",
      rating: 4.9,
      image: "/7.jpg"
    },
    {
      icon: <Shield />,
      title: "Système de Freinage",
      description: "Contrôle et remplacement des éléments de freinage pour votre sécurité.",
      features: ["Plaquettes de frein", "Disques de frein", "Liquide de frein"],
      price: "À partir de 120€",
      rating: 4.7,
      image: "/9.jpeg"
    },
    {
      icon: <Settings />,
      title: "Pneumatiques",
      description: "Montage, équilibrage et géométrie pour une conduite optimale et sécurisée.",
      features: ["Montage pneus", "Équilibrage roues", "Géométrie train avant"],
      price: "À partir de 40€",
      rating: 4.8,
      image: "/10.jpeg"
    },
    {
      icon: <Zap />,
      title: "Climatisation",
      description: "Entretien et réparation des systèmes de climatisation automobile.",
      features: ["Recharge gaz R134a", "Diagnostic panne", "Nettoyage circuit"],
      price: "À partir de 90€",
      rating: 4.6,
      image: "/8.png"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="services-header fade-in-up">
          <div className="services-badge">
            <Settings className="badge-icon" />
            <span>Services Professionnels</span>
          </div>
          
          <p className="services-subtitle">
            Une gamme complète de services pour l'entretien et la réparation de votre véhicule à Yaoundé
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="card-background"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="card-overlay"></div>
              
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-rating">
                    <Star className="star-icon" />
                    <span>{service.rating}</span>
                  </div>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <CheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Besoin d'un devis personnalisé ?</h3>
            <p>Contactez-nous dès aujourd'hui pour obtenir un diagnostic gratuit et un devis adapté à vos besoins.</p>
            <button onClick={openWhatsApp} className="cta-button">
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;