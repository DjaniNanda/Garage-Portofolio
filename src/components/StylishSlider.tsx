import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './StylishSlider.css';

interface SlideData {
  image: string;
  title: string;
  description: string;
  alt: string;
}

interface StylishSliderProps {
  slides: SlideData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const StylishSlider: React.FC<StylishSliderProps> = ({ 
  slides, 
  autoPlay = true, 
  autoPlayInterval = 6000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [slides.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [slides.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(autoPlay);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <div 
      className="stylish-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Galerie d'images Exact Automobile"
    >
      <div className="slider-wrapper">
        <div 
          className="slider-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img
                src={slide.image}
                alt={slide.alt}
                className="slide-image"
                loading={index === 0 ? "eager" : "lazy"}
                width="800"
                height="500"
              />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-navigation nav-prev">
          <button
            className="nav-button"
            onClick={prevSlide}
            aria-label="Image précédente"
            type="button"
            disabled={isTransitioning}
          >
            <ChevronLeft />
          </button>
        </div>

        <div className="slider-navigation nav-next">
          <button
            className="nav-button"
            onClick={nextSlide}
            aria-label="Image suivante"
            type="button"
            disabled={isTransitioning}
          >
            <ChevronRight />
          </button>
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Aller à l'image ${index + 1}`}
              type="button"
              disabled={isTransitioning}
            />
          ))}
        </div>

        <div className="slide-number">
          {currentSlide + 1} / {slides.length}
        </div>

        <div 
          className={`slider-progress ${isAutoPlaying ? 'auto-play' : ''}`}
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default StylishSlider;