import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Star, Play, ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

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

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  const youtubeUrl = "https://www.youtube.com/embed/3oGx-r6gr5k";

  return (
    <section id="accueil" className="hero">
      {/* Enhanced background with multiple overlays */}
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

      {/* Animated particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }} />
        ))}
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            {/* Enhanced badge */}
            <div className="hero-badge">
              <div className="badge-icon-wrapper">
                <Star className="badge-icon" aria-hidden="true" />
                <Star className="badge-icon badge-icon-ping" aria-hidden="true" />
              </div>
              <span>Garage de confiance à Yaoundé</span>
            </div>
            
            {/* Enhanced title with gradient text */}
            <h1 className="hero-title">
              <span className="title-gradient">Exact Automobile</span>
              <br />
              <span className="title-white">Votre partenaire mécanique</span>
              <br />
              <span className="title-accent">à Yaoundé</span>
            </h1>
            
            {/* Enhanced description */}
            <p className="hero-description">
              Situé à <span className="location-highlight">Terminus Mimboman, Yaoundé</span>, 
              notre équipe de plus de 20 mécaniciens experts s'occupe de votre véhicule avec 
              professionnalisme et précision. Diagnostic, réparation, entretien - nous maîtrisons 
              tous les aspects de la mécanique automobile.
            </p>

            
            
            {/* Enhanced buttons */}
            <div className="hero-buttons">
              <button 
                onClick={openWhatsApp}
                className="btn btn-whatsapp"
                aria-label="Prendre rendez-vous via WhatsApp"
              >
                <MessageCircle aria-hidden="true" />
                <span>Prendre rendez-vous</span>
                <ArrowRight className="btn-arrow" aria-hidden="true" />
                <div className="btn-shine"></div>
              </button>
              <button 
                onClick={scrollToServices}
                className="btn btn-secondary"
                aria-label="Voir nos services"
              >
                <span>Nos services</span>
                <ArrowRight className="btn-arrow" aria-hidden="true" />
              </button>
            </div>

            {/* New trust indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <CheckCircle className="trust-icon" aria-hidden="true" />
                <span>Garantie qualité</span>
              </div>
              <div className="trust-item">
                <CheckCircle className="trust-icon" aria-hidden="true" />
                <span>Prix transparent</span>
              </div>
              <div className="trust-item">
                <CheckCircle className="trust-icon" aria-hidden="true" />
                <span>Service rapide</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced video container */}
          <div className={`video-wrapper ${isVisible ? 'animate-in-delay' : ''}`}>
            <div className="video-decorations">
              <div className="decoration decoration-1"></div>
              <div className="decoration decoration-2"></div>
            </div>
            
            <div className="video-container enhanced">
              {!isVideoPlaying ? (
                <div className="video-preview" onClick={playVideo}>
                  <img 
                    src="/thumbnail.JPG" 
                    alt="Vidéo présentation Exact Automobile"
                    className="preview-image"
                  />
                  <div className="preview-overlay"></div>
                  <div className="play-button">
                    <div className="play-button-inner">
                      <Play aria-hidden="true" />
                    </div>
                    <div className="play-button-ping"></div>
                  </div>
                  <div className="video-info">
                    <h3>Découvrez notre garage</h3>
                    <p>Visite complète de nos installations</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`${youtubeUrl}?autoplay=1`}
                  title="Exact Automobile - Présentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>

            <div className="video-badge">
              <div className="badge-dot"></div>
              <span>Présentation vidéo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;