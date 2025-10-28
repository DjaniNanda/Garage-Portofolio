import React, { useState, useEffect } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teamImages = [
    {
      src: '/2.jpg',
      alt: 'Équipe Exact Automobile - Mécaniciens professionnels à Yaoundé',
      title: 'Service Premium',
      subtitle: 'Excellence et satisfaction garanties'
    },
    {
      src: '/18.jpg',
      alt: 'Équipe Exact Automobile - Mécaniciens professionnels à Yaoundé',
      title: 'Notre Atelier',
      subtitle: 'Équipement moderne et professionnel'
      
    },
    {
      src: '/6.jpg',
      
      alt: 'Équipe Exact Automobile - Mécaniciens professionnels à Yaoundé',
      title: 'Experts Qualifiés',
      subtitle: 'Des mécaniciens certifiés à votre service'
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [teamImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="team-section">
      <div className="team-container">
        {/* Background decorative elements */}
        <div className="team-bg-decoration">
          <div className="team-decoration-circle team-decoration-circle-1"></div>
          <div className="team-decoration-circle team-decoration-circle-2"></div>
        </div>

        {/* Header */}
        <div className="team-header">
          <div className="team-badge">
            <Users className="team-badge-icon" />
            <span>Notre Équipe</span>
          </div>
          
          <h2 className="team-title">
            Une équipe passionnée à votre service
          </h2>
          
          <p className="team-subtitle">
            Découvrez l'équipe d'experts qui prend soin de votre véhicule avec 
            professionnalisme et dévouement chez Exact Automobile.
          </p>
        </div>

        {/* Team Content */}
        <div className="team-content">
          {/* Team Image Slider */}
          <div className="team-image-container">
            <div className="team-slider">
              <div className="team-image-wrapper">
                {teamImages.map((image, index) => (
                  <div
                    key={index}
                    className={`team-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="team-image"
                    />
                    <div className="team-image-overlay">
                      <h3 className="overlay-title">{image.title}</h3>
                      <p className="overlay-subtitle">{image.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button 
                className="slider-btn slider-btn-prev" 
                onClick={prevSlide}
                aria-label="Image précédente"
              >
                <ChevronLeft />
              </button>
              <button 
                className="slider-btn slider-btn-next" 
                onClick={nextSlide}
                aria-label="Image suivante"
              >
                <ChevronRight />
              </button>

              {/* Dots Indicator */}
              <div className="slider-dots">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Team Info */}
          <div className="team-info">
            {/* Stats */}
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Mécaniciens</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Engagement qualité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;