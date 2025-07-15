import React, { useState, useRef } from 'react';
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

  const youtubeUrl = "https://www.youtube.com/embed/3oGx-r6gr5k?modestbranding=1&rel=0&showinfo=0";

  return (
    <section id="accueil" className="hero">
      <div className="hero-background">
        <img 
          src="/1.jpg"
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
                className="btn btn-primary"
                aria-label="Voir nos services"
              >
                Nos services
              </button>
            </div>
          </div>
          
          <div className="video-container">
            <iframe
              src={`${youtubeUrl}?autoplay=0&rel=0&modestbranding=1`}
              title="Exact Automobile - Présentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;