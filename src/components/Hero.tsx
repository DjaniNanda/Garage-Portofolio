import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+237680075429"; 
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const headerHeight = 40;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="accueil" className="hero">
      <div className="hero-background">
        <img 
          src="/IMG-20250625-WA0010.jpg" 
          alt="Exact Automobile - Garage moderne à Terminus Mimboman, Yaoundé" 
          className="hero-image"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <div className="hero-badge">
              <Star className="badge-icon" aria-hidden="true" />
              <span>Garage de confiance à Yaoundé</span>
            </div>
            
            <h1>Exact Automobile - Votre partenaire mécanique à Yaoundé</h1>
            <p>
              Situé à Terminus Mimboman, Yaoundé, notre équipe de plus de 20 mécaniciens experts 
              s'occupe de votre véhicule avec professionnalisme et précision. Diagnostic, 
              réparation, entretien - nous maîtrisons tous les aspects de la mécanique automobile.
            </p>
            
            <div className="hero-buttons">
              <button 
                onClick={openWhatsApp} 
                className="btn btn-whatsapp"
                aria-label="Prendre rendez-vous via WhatsApp"
              >
                <MessageCircle aria-hidden="true" />
                Prendre rendez-vous
              </button>
              <button 
                onClick={scrollToServices}
                className="btn btn-secondary"
                aria-label="Voir nos services"
              >
                Nos services
              </button>
            </div>
          </div>
          
          <div className="hero-stats slide-in-right">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Véhicules réparés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Mécaniciens experts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;