import React, { useState, useEffect, useCallback } from 'react';
import { Users, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Award, Zap } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  
  const teamImages = [
    {
      src: '/2.jpg',
      alt: 'Équipe Exact Automobile - Mécaniciens professionnels à Yaoundé',
      title: 'Notre Atelier Moderne',
      subtitle: 'Équipement de pointe pour un service excellence',
      icon: Sparkles,
      color: '#A8D8C3'
    },
    {
      src: '/18.jpg',
      alt: 'Équipe Exact Automobile - Mécaniciens professionnels à Yaoundé',
      title: 'Experts Certifiés',
      subtitle: 'Une équipe passionnée et qualifiée',
      icon: Award,
      color: '#7BC8A4'
    },
    {
      src: '/6.jpg',
      alt: 'Équipe Exact Automobile - Mécaniciens professionnels à Yaoundé',
      title: 'Performance Garantie',
      subtitle: 'Votre satisfaction est notre priorité',
      icon: Zap,
      color: '#5AB894'
    }
  ];

  // Auto-play with progress
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 0.5;
      });
    }, 25); // Update every 25ms for smooth progress

    const slideInterval = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % teamImages.length);
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isAutoPlaying, teamImages.length]);

  const nextSlide = useCallback(() => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [teamImages.length]);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + teamImages.length) % teamImages.length);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [teamImages.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [currentSlide]);

  const currentImage = teamImages[currentSlide];
  const IconComponent = currentImage.icon;

  return (
    <section className="team-section">
      <div className="team-container">
        {/* Enhanced Background decorative elements */}
        <div className="team-bg-decoration">
          <div className="team-decoration-circle team-decoration-circle-1"></div>
          <div className="team-decoration-circle team-decoration-circle-2"></div>
          <div className="team-decoration-circle team-decoration-circle-3"></div>
        </div>

        {/* Header */}
        <div className="team-header">
          <div className="team-badge">
            <Users className="team-badge-icon" />
            <span>Notre Équipe</span>
            <div className="badge-shimmer"></div>
          </div>
          
          <h2 className="team-title">
            Une équipe <span className="title-highlight">passionnée</span> à votre service
          </h2>
          
          <p className="team-subtitle">
            Découvrez l'équipe d'experts qui prend soin de votre véhicule avec 
            professionnalisme et dévouement chez Exact Automobile.
          </p>
        </div>

        {/* Team Content */}
        <div className="team-content">
          {/* Enhanced Team Image Slider */}
          <div className="team-image-container">
            <div className="team-slider">
              <div className="team-image-wrapper">
                {teamImages.map((image, index) => (
                  <div
                    key={index}
                    className={`team-slide ${index === currentSlide ? 'active' : ''} ${
                      index === currentSlide ? `slide-${direction}` : ''
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="team-image"
                    />
                    <div className="image-gradient-overlay"></div>
                    <div className="team-image-overlay">
                      <div className="overlay-icon-wrapper" style={{ background: image.color }}>
                        <IconComponent className="overlay-icon" />
                      </div>
                      <h3 className="overlay-title">{image.title}</h3>
                      <p className="overlay-subtitle">{image.subtitle}</p>
                      <div className="overlay-decorator"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Navigation Buttons */}
              <button 
                className="slider-btn slider-btn-prev" 
                onClick={prevSlide}
                aria-label="Image précédente"
              >
                <ChevronLeft />
                <span className="btn-ripple"></span>
              </button>
              <button 
                className="slider-btn slider-btn-next" 
                onClick={nextSlide}
                aria-label="Image suivante"
              >
                <ChevronRight />
                <span className="btn-ripple"></span>
              </button>

            </div>
          </div>

          {/* Enhanced Team Info */}
          <div className="team-info">
            {/* Enhanced Stats */}
            <div className="team-stats">
              <div className="stat-item" style={{ animationDelay: '0.1s' }}>
                <div className="stat-icon-wrapper">
                  <Users className="stat-icon" />
                </div>
                <div className="stat-number">
                  <span className="number-animated">10</span>+
                </div>
                <div className="stat-label">Mécaniciens Experts</div>
                <div className="stat-shine"></div>
              </div>
              <div className="stat-item" style={{ animationDelay: '0.2s' }}>
                <div className="stat-icon-wrapper">
                  <TrendingUp className="stat-icon" />
                </div>
                <div className="stat-number">
                  <span className="number-animated">10</span>+
                </div>
                <div className="stat-label">Années d'Excellence</div>
                <div className="stat-shine"></div>
              </div>
              <div className="stat-item" style={{ animationDelay: '0.3s' }}>
                <div className="stat-icon-wrapper">
                  <Award className="stat-icon" />
                </div>
                <div className="stat-number">
                  <span className="number-animated">1000</span>+
                </div>
                <div className="stat-label">Clients Satisfaits</div>
                <div className="stat-shine"></div>
              </div>
              <div className="stat-item" style={{ animationDelay: '0.4s' }}>
                <div className="stat-icon-wrapper">
                  <Sparkles className="stat-icon" />
                </div>
                <div className="stat-number">
                  <span className="number-animated">100</span>%
                </div>
                <div className="stat-label">Engagement Qualité</div>
                <div className="stat-shine"></div>
              </div>
            </div>

            {/* Current slide info card */}
            <div className="current-slide-info" style={{ borderColor: currentImage.color }}>
              <div className="info-icon" style={{ background: currentImage.color }}>
                <IconComponent />
              </div>
              <div className="info-content">
                <h4>{currentImage.title}</h4>
                <p>{currentImage.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;